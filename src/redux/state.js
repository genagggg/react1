let rerenderEntireTree = ()=>{}
let state = {
    n: [
    {id:1, name:'Andrey'},
    {id:2, name:'Robert'},
    {id:3, name:'Artur'},
    {id:4, name:'Anjela'},
    {id:5, name:'Svets'}
  ],

  newP:'it kam',
  
  messageUser: [
  {id:1, messages:"Hi"},
  {id:2, messages:"How"},
  {id:3, messages:"Are"},
  {id:4, messages:"You"},
  {id:5, messages:"yes"}
  ],

   nameUsers: [
   {uname: 'Oleg'},
   {uname: 'Yoriy'},
   {uname: 'Viktor'},
   {uname: 'Angel'}
  ]
}



export const addPost =()=>{
  let newPost ={ uname: state.newP}
  state.nameUsers.push(newPost);
  state.newP='';
  rerenderEntireTree();
}

export const updateNewPostText =(newText)=>{
state.newP=newText;
rerenderEntireTree();
}

export const addName=()=>{
  let newN={name:state.newP}
  state.n.push(newN);
  rerenderEntireTree();
}

export const subscribe =(observer)=>{
rerenderEntireTree=observer;
}

  export default state;