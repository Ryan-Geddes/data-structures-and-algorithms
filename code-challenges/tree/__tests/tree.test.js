// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully add a left child and right child to a single root node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal



'use strict';



const BinaryTree = require('./tree');


describe('binary search tree implementation', () => {


  it('Can successfully instantiate an empty tree', async() => {
      let  = await request.get('/bad');
      console.log(response.status);
      expect (response.status).toEqual(404);
  });

  it('Can successfully instantiate a tree with a single root node', async() => {
    //this tests the SHAPE of the return
    let obj = {
      "username": "boomer",
      "password": "1234",
			// "role": "guest"
    }
    let res = await request.post('/signup').send(obj);
    let output = res.body;
    console.log({output});
    expect(output.user.username).toBe(obj.username)
    expect(output.user.role).toBe(obj.role)
    expect(output.user.password).toBeDefined();
    expect(output.token).toBeDefined();
    expect (res.status).toEqual(200);
});

it('Can successfully add a left child and right child to a single root node', async() => {
    //this tests the CONTENT of the return
    
  let obj = {
    "username": "boomer",
    "password": "1234",
    "role": "guest"
  }  
  let res = await request.post('/signup').send(obj);
  let jwtVar = jwt.verify(res.body.token, process.env.SECRET);
  expect(jwtVar).toBeTruthy();
  expect(res.status).toEqual(200);

});

it('Can successfully return a collection from a preorder traversal', async() => {
  //this tests the CONTENT of the return
  
let obj = {
  "username": "boomer",
  "password": "1234",
  "role": "guest"
}  
let res = await request.post('/signup').send(obj);
let jwtVar = jwt.verify(res.body.token, process.env.SECRET);
expect(jwtVar.username).toBe('boomer');
//expect(jwtVar.role).toBe('guest');

});


});


