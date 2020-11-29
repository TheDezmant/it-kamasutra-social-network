import React from 'react';
import StyledContent from './units';
import Catalog from './Catalog';
import ProfileConteiner from './Profile/ProfileConteiner';
import News from './News';
import Setting from './Setting';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './Dialogs/dialogsContainer';
import UsersContainer from './Users/UsersContainer';

const Content = () => {
    let SomeComponent = () => <DialogsContainer />;
    return (
        <BrowserRouter>
            <StyledContent>
                <Catalog />
                <Route path="/dialogs" component={SomeComponent} />
                <Route path="/profile" render={() => <ProfileConteiner />} />
                <Route path="/users" render={() => <UsersContainer />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/setting" render={() => <Setting />} />
            </StyledContent>
        </BrowserRouter>
    );
};
export default Content;
