import { observable } from 'mobx';

class GitRepos {
    @observable list = [];
    @observable loading= false;
    page = 1;
    @observable sortType = 'star';
    incompleteResults = true;
}

export default new GitRepos();
