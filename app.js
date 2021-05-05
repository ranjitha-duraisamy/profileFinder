//Instantiate GitHub
const github = new GitHub;
//Instantiate UI
const ui  = new UI;

//Search input
const searchUser = document.getElementById('searchUser');
//create event listener
searchUser.addEventListener('keyup', (e)=>{
    
    //Get Input Text
    const userText = e.target.value;
    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        .then(data=>{
            console.log(data);
            if(data.profile.message === 'Not Found'){
                //Show alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            }
            else{
                //show profile
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
            }
        })
    }
    else{
        //clear Profile
        ui.clearProfile();
    }
})