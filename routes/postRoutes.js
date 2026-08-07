import express from "express";

const router = express.Router();
let posts = [];

router.get("/", (req, res) => {
  res.json({
    message: 'get post from post path server port at 1900',
    posts
  })
}) 

router.post("/", (req, res) => {
const {title, dis} = req.body;
let newPost = {
    id: Date.now(),
    title,
    dis,
    createdAt: new Date().toLocaleString()
}
posts.push(newPost)
res.json({
    message: 'post successfull ',
    newPost 
})
});


router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const {title , dis} = req.body;

  const index = posts.findIndex( (post) => post.id === id)
  console.log(id)
    if (index === -1) {
        return res.status(404).json({
            message: "Post not found"
        });
    }
    posts[index].title = title;
    posts[index].dis = dis;

      res.status(200).json({
        message: "Post Updated Successfully",
        updatedPost: posts[index]
    });


})


router.delete("/:id", (req, res) =>{
      console.log("DELETE API HIT");

  const id = Number( req.params.id)
  const index = posts.findIndex((post) => post.id === id)
  if(index === -1){
    res.status(404).json({
  message: 'id not found'
    })
  }

  posts.splice(index, 1)
  res.status(200).json({
    message: 'post deleted'
  })
})


export default router