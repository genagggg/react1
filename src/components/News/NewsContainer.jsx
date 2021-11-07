import News from "./News";
import { connect } from "react-redux";

let mapStateToProps =(state)=>{
return {
post: state.newsPage.post
}
}

let mapDispatchToProps = ()=>{
    return {

    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;