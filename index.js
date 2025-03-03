const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt = require("bcrypt");
const bodyparser=require("body-parser");
//const app=express()
//app.use(express);
const app=express()
app.use(cors());
app.use(express.json()); 
const UserModel=require("./userSchema")
mongoose.connect("mongodb://localhost:27017/IRO");
app.post("/adduser", async (req, res) => {
    const { name, email, password,designation,yoj,gender } = req.body;
    try {
      const user = await UserModel.findOne({ email });
  
      if (user) {
        return res.status(400).json({ message: "Account already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      await UserModel.create({ name, email, password: hashedPassword,designation,yoj,gender });
  
      return res.status(201).json({ message: "Account created successfully" });
    } catch (err) {
      console.error("Error:", err);
      return res.status(500).json({ message: "Internal server error"});
    }
  });
  app.post('/login', async (req, res) => { 
    try {
      const { email, password } = req.body;
  
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Email/Password mismatch!" });
      }
  
      const matched = await bcrypt.compare(password, user.password);
      if (!matched) {
        return res.status(400).json({ message: "Email/Password mismatch!" });
      }
  
      return res.status(200).json({
        message: "Login successful",
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error('Server Error:', error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
 /*app.post("/adduser",async(req,res)=>{
  const{name,email,password}=req.body;
  try{
    const user= await RegisterModel.findOne({email});
    if(user)
    {
      res.status(200).json({message:"Account exists"})
    }
    else{
      const hashedPassword=await bcrypt.hash(password,10);
      RegisterModel.create({name:name,email:email,password:hashedPassword})
      return res.json({message:"Account created"});

    }
  }
  catch(err){
    return res.json({message:"Error"})
  }
 }) ;*/
    

/*app.post("/adduser",async (req,res)=>{
    const{name,email,password}=req.body;
    try{
    const user= await UserModel.findOne({email:email});
    
        if(user)
        {
           res.status(200).json({message:"Account exist"})
        }
        else
        {
             const hashedpassword=await bcrypt.hash(password,10);
            await UserModel.create({name:name,email:email,password:hashedpassword})
            return res.json({message:"Account created"});
            
        }
    
    
    }catch(err){
        return res.json({message:"Error"});
    }
});
app.post('/login', async (req, res) => {
    try {
    
      const { email,password } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) return res.status(500).json({error: "Email/Password mismatch!"});
    
      const matched = await bcrypt.compare(password, user.password);
      if (!matched) return res.status(404).json({error: "Email/Password mismatch!"});
      return res.json(user);
    }
    catch (error) {  
        console.error('Server Error', error);
        return res.status(500).json({error: " server error "});

      }

    });*/
    /*app.post('/login', async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await RegisterModel.findOne({ email });
            if (!user || user.password !== password) {
                return res.status(401).json({ error: "Invalid credentials" });
            }
            res.status(200).json({ id: user._id, name: user.name, email: user.email });
        } catch (err) {
            res.status(500).json({ error: "Login failed" });
        }
    });*/
    
/*app.get("/viewusers",async(req,res)=>{
    try{
        const users=await find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({error:"Failed to fetch users"});
    }
})*/
//app.listen(3000,()=>{console.log("Server is Running")})
//app.listen(3000, () => console.log("Server is running on http://localhost:9000"));
/*app.get("/viewusers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await RegisterModel.findById(id); // Use Mongoose to fetch the user
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});*/
/*app.get('/userDetails/:userId',async(req,res)=>{
    try{
        const userId=req.params.userId;
        const user=await UserModel.findById(userId);
        console.log("user id:",userId)
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const userDetails={
            name:user.name,
            email:user.email
        };
        res.status(200).json(userDetails);
    }
    catch(error){
        console.error("error fetching userdetails :",error);
        res.status(500).json({message:'Internal Server Error'});
    }
});*/
/*app.get('/userDetails/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await UserModel.findById(userId);

        console.log("Received request for user ID:", userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});*/
app.get('/userDetails/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        // Log the received user ID
        console.log("Received request for user ID:", userId);

        // Validate userId as a MongoDB ObjectId
        const mongoose = require('mongoose');
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        // Fetch user details from the database
        const user = await UserModel.findById(userId);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with user details
        res.status(200).json({
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



/*app.get("/viewusers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await RegisterModel.findById(id); // Use Mongoose to fetch the user
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch user data" });
    }
});*/
app.get("/viewusers/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log("Received user ID:", id);
  
      const user = await RegisterModel.findById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (err) {
      console.error("Error fetching user:", err.message);
      res.status(500).json({ error: "Failed to fetch user data" });
    }
  });
  
/*app.post('/editbyid',(req,res)=>{
    RegisterModel.findByIdAndUpdate({id}).exec();
    const {name,email}=req.body;
}
.then(data=>{
    res.json({
        status:200,
        msg:"Updated Successfully"
    })
})
.catch(err=>{
    res.json({
        status:500,
        msg:"Data not updated",
        error:err

    })
})

);*/
/*app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})*/
/*app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
  
    UserModel.findById(id)
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
      })
      .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
  });
  */
  app.get('/getUser/:id', async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid user ID" });
      }
  
      const user = await UserModel.findById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json({ name: user.name, email: user.email,designation:user.designation,yoj:user.yoj,gender:user.gender });
    } catch (err) {
      console.error("Error fetching user:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  /*app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params;
  UserModel.findByIdAndDelete({_id:id}) 
.then(res=>res.json(res))
.catch(err=>res.json(err)) })*/
app.delete('/deleteUser/:id', (req, res) => {
  const { id } = req.params;
  UserModel.findByIdAndDelete(id)
    .then(result => res.json({ message: "User deleted successfully", result }))
    .catch(err => res.status(500).json({ error: err.message }));
});

  
  app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
  
    const { name, email } = req.body;
  
    UserModel.findByIdAndUpdate(id, { name, email }, { new: true })
      .then(updatedUser => {
        if (!updatedUser) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User updated successfully", user: updatedUser });
      })
      .catch(err => res.status(500).json({ error: "Internal server error", details: err }));
  });
app.listen(1005, () => {
    console.log("Server is running on http://localhost:1005");
  });
  

    
    



