const pictureDiv = document.querySelector('.div2');
const Name = document.querySelector('#name');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const Email = document.querySelector('#email');
const gitHub = document.querySelector('#gitHub');
const submit = document.querySelector('.button3');
const section2 = document.querySelector('.section2');
const section1 = document.querySelector('#section1');
const section0 = document.querySelector('#section0');
const header = document.querySelector('.h1A');
const aSpan = document.querySelector('.span2');
const uploadError = document.querySelector('.span');
const spanName = document.querySelector('.spanName');
const spanEmail = document.querySelector('.spanEmail');
const yourName = document.querySelector('.yourName');
const yourGit = document.querySelector('.yourGit');
const fileInput = document.querySelector('#file');
const uploadImg = document.querySelector('.image2');
const yourImage = document.querySelector('.avatar');
const divFive = document.querySelector('.div5');
let globalFile;

const successSection = (e)=>{
    e.preventDefault();
    if(pictureDiv.childElementCount > 2 && pictureDiv.children[2].style.display !== 'none')
    {
        section2.style.display = 'block';
        section1.style.display = 'none';
        section0.style.display = 'none';
        header.style.display = 'none';
        aSpan.style.display = 'none';

        spanName.textContent = Name.value;
        spanEmail.textContent = Email.value;
        yourName.textContent = Name.value;
        yourGit.textContent = `@${gitHub.value}`;
        const img = document.createElement('img');
        //adding image to ticket
        img.src = URL.createObjectURL(globalFile);
        img.alt = 'your picture';
        img.classList.add('avatar');
        divFive.replaceChild(img, yourImage);
    }



}
//function for reselecting a image with the after the initial time 
// of selecting an image
function displayImage2(file)
{
    //replace old pic with new pic
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.alt = 'your picture';
    img.classList.add('avatar0');
    pictureDiv.replaceChild(img, pictureDiv.children[2]);
    globalFile = file;
   
    console.log(pictureDiv.children);
    pictureDiv.children[0].style.display = 'none';
    pictureDiv.children[1].style.display = 'none';
    pictureDiv.children[2].style.display = '';
    pictureDiv.children[3].style.display = '';
    pictureDiv.children[4].style.display = '';
    pictureDiv.children[5].style.display = '';
    
}

//function for removing an image with the 'remove image' button
function removeImage()
{
    pictureDiv.children[0].style.display = '';
    pictureDiv.children[1].style.display = '';
    pictureDiv.children[2].style.display = 'none';
    pictureDiv.children[3].style.display = 'none';
    pictureDiv.children[4].style.display = 'none';
    pictureDiv.children[5].style.display = 'none';

}

//function for choosing an image for the first time with click
const displayImage = (file) =>{

    if(pictureDiv.childElementCount >= 6)
    {
        console.log('6');
        
        displayImage2(file);
        return;
    }
    //checking for image files compatibility
    if(file.type === 'image/jpeg' || 'image/png')
    {
            
        if(file.size <= 500000)
        {
            console.log(pictureDiv.children);

            //the process of adding user image and buttons to div
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.alt = 'your picture';
            img.classList.add('avatar0');
            pictureDiv.appendChild(img);
            globalFile = file;
            const brake = document.createElement('br');
            pictureDiv.appendChild(brake);
            const button1 = document.createElement('button');
            button1.classList.add('button1');
            button1.textContent = 'Remove image';
            pictureDiv.appendChild(button1);
            const button2 = document.createElement('button');
            button2.classList.add('button2');
            button2.textContent = 'Change image';
            pictureDiv.appendChild(button2);

            //adding a listener to first button incase of 
            // user wanting to remove photo
            button1.addEventListener('click',()=>{
                removeImage();
            });

            //adding a listener to second button incase of user 
            //reselecting a photo
            button2.addEventListener('click', ()=>{
                fileInput.click();
                change();
            });
        }
        else
        {
            uploadError.textContent = 'File too large. Please upload a fle under 500kb';
        }
    }
        
}

//function for receiving selected file after click
const clickToReceiveFile = ()=>{

    const files = fileInput.files[0];

    //clearing former elements to add user image and buttons
            uploadImg.style.display = 'none';
            let span1 = document.querySelector('.span3');
            span1.style.display = 'none';

            if(files)
            {
                displayImage(files);
            }
            else{
                console.log('couldnt access file');
            }
}



//function to carry out when user wishes to reselect/change photo
function change()
{

    fileInput.addEventListener('change', ()=>{
    const file2 = fileInput.files[0];

   if(file2.type === 'image/jpeg' || 'image/png')
    {
        if(file2.size <= 600000)
        {
            console.log(pictureDiv.children);
            
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file2);
            img.alt = 'your picture';
            img.classList.add('avatar0');
            pictureDiv.replaceChild(img, pictureDiv.children[2]);
            globalFile = file2;
            
            
        }
    }
                    
});
}

const change2 = (file)=>{
    if(pictureDiv.childElementCount === 6)
    {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file[0]);
            img.alt = 'your picture';
            img.classList.add('avatar0');
            pictureDiv.replaceChild(img, pictureDiv.children[2]);
            globalFile = file[0];
            pictureDiv.children[0].style.display = 'none';
            pictureDiv.children[1].style.display = 'none';
            pictureDiv.children[2].style.display = '';
            pictureDiv.children[3].style.display = '';
            pictureDiv.children[4].style.display = '';
            pictureDiv.children[5].style.display = '';

            
    }
}


//beginning function when selecting image with a click 
function byClick(e)
{
   fileInput.addEventListener('change', clickToReceiveFile);
}


function dragIt(e)
{
    e.preventDefault();
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    
}


function gitParseEffect(e)
{
    
    let git = e.target.value;
    
    if(git.length < 1)
    {
        gitHub.style.border = '4px solid red';
    }
    else
    {
        gitHub.style.border = '4px solid green';
    }
}


function emailParseEffect(e)
{
    const myEmail = e.target.value;
    if(myEmail.endsWith('.com') && myEmail.includes('@'))
    {
        emailError.innerHTML = '';
        Email.style.border = '4px solid green';

    }
    else
    {
        emailError.innerHTML = 'please enter a valid email address';
        Email.style.border = '4px solid red';
        emailError.style.color = 'red';
    }
}


function nameParseEffect(e)
{
    const fullName = e.target.value;
    if((!fullName.startsWith(' ')) &&  fullName.includes(' ') && (!fullName.endsWith(' ')))
    {
        nameError.innerHTML = '';
        Name.style.border = '4px solid green';
        nameError.style.color = 'green';
    }
    else
    {
        nameError.innerHTML = 'Enter your full name';
        nameError.style.color = 'red';
        Name.style.border = '4px solid red';
    }
}


const hoverEffect =(e)=>{
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
}


function removeEffect(e)
{
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
}


pictureDiv.addEventListener('mouseleave', removeEffect);
pictureDiv.addEventListener('dragover', dragIt);
pictureDiv.addEventListener('dragleave', (e)=>{
    e.target.style.backgroundColor = '';
});
pictureDiv.addEventListener('drop',(e)=>{
    e.preventDefault();
    const files = e.dataTransfer.files;
    if(files[0].type === 'image/jpeg' || 'image/png')
    {
        if(pictureDiv.childElementCount !== 6)
        {
            if(files[0].size <= 600000)
            {
                 //the process of adding user image and buttons to div
                const img = document.createElement('img');
                img.src = URL.createObjectURL(files[0]);
                img.alt = 'your picture';
                img.classList.add('avatar0');
                pictureDiv.appendChild(img);
                globalFile = files[0];
                const brake = document.createElement('br');
                pictureDiv.appendChild(brake);
                const button1 = document.createElement('button');
                button1.classList.add('button1');
                button1.textContent = 'Remove image';
                pictureDiv.appendChild(button1);
                const button2 = document.createElement('button');
                button2.classList.add('button2');
                button2.textContent = 'Change image';
                pictureDiv.appendChild(button2);

                pictureDiv.children[0].style.display = 'none';
                pictureDiv.children[1].style.display = 'none';

                //adding a listener to first button incase of 
                // user wanting to remove photo
                button1.addEventListener('click',()=>{
                    removeImage();
                });

                //adding a listener to second button incase of user 
                //reselecting a photo
                button2.addEventListener('click', ()=>{
                    fileInput.click();
                    change();
                });
                }
                else
                {
                    uploadError.textContent = 'File too large. Please upload a file under 500kb';
                }
               
        }
        else if(pictureDiv.childElementCount === 6)
        {
            if(pictureDiv.children[2].style.display !== 'none')
            {
                console.log('blocked trying to layer an image on another');
                return;
            }
            else
            {
                change2(files);
            }
            
        }
    }
});

uploadImg.addEventListener('click', ()=>{
    
    //opening file explorer for user to select image to upload 
    fileInput.click(); 
    //calling function to receive file
    byClick();
});
Name.addEventListener('keyup', nameParseEffect);
Email.addEventListener('keyup', emailParseEffect);
gitHub.addEventListener('keyup', gitParseEffect);
submit.addEventListener('click', successSection);