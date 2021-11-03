import Main from './Main'
import {connect} from 'react-redux'
let mapStateToProps=(state)=>{
    return{
        users: state.mainPage.users
    }
}

let mapDispatchToProps =(dispatch)=>{
    return 0;
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps) (Main);
export default MainContainer;