const mongoose = require('mongoose');
const { Schema } = mongoose;

async function init(){
    
    await mongoose.connect('mongodb+srv://alex:Drako09122021@cluster0.fhx0jyq.mongodb.net/?retryWrites=true&w=majority')
        console.log('Connected!');

        const userSchema = new Schema({
            name: String,
            age: Number,
          });

          const User = mongoose.model('User', userSchema);

            const userBody={
                name:"Alex",
                age: 21,
}

          const userDoc = new User(userBody);

         const user =  await userDoc.save();

         const users = await User.find();
          
          console.log(user);
          

}
  
  
  init();