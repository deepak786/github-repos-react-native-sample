import { observable } from 'mobx';

class GitRepos {
    @observable list = [];
    @observable loading= false;
    @observable sortType = 'star';
    
    incompleteResults = true;
    page = 1;
    perPageItems = 20;
}

export default new GitRepos();
