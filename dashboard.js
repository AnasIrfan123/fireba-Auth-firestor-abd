import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth, db } from "./config.js";

import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js"; 

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);//login hoa to uid mil jayegi
    } else {
      window.location = 'index.html'//agr login nh hoga to login par he rahega/chla jayega
    }
  });


//  LOGOUT FUNCTION

  const logout = document.getElementById('logout-btn')
logout.addEventListener('click', () => { //logout btn par koe event nh chalwaya ha mtlb default behaviour he chlega

    signOut(auth).then(() => {
      window.location = 'index.html' //or ye logout par login page par e rakhega
    }).catch((error) => {
       console.log(error);
    });
})
//jb user logout krta ha to wapas login par jta ha example facebook pir again login krta ha to home par ata ha 
//mtlb data firebase me sy delete nh hoga

                   // firestore work

const form = document.getElementById('form')
const title = document.getElementById('title')      
const description = document.getElementById('description')
const card = document.getElementById('card') //card ko id sy get kia 

//---------------------DataBase sy Data mangwa rahy hn------------------------

async function getDataFromFirestore(){
  const arr = []
    const querySnapshot = await getDocs(collection(db, "posts"));  //or ye kam hmne uper kia ha 
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
    }); 
    console.log(arr);
  arr.map((item)=> {
    card.innerHTML += `
          <div class="card">
            <div class="card-body">
                <p><span class="h5">Title:</span>${item.title}</p>
                <p><span class="h5">Description:</span>${item.description}</p>
            </div>
          </div> `
  })
}
getDataFromFirestore();

//-----------yhn hm database sy data bhej rahy hn------------- 

form.addEventListener('submit', async (event) => { //or jhn await araha hoga whn async lga dengy
  event.preventDefault();
  card.innerHTML = '' //or idhr wo sb ko 1 sath de rha tha islye mne card ko empty kr dia tk k 1 1 kr k single aye
  console.log(title.value);
  console.log(description.value);
  console.log(auth.currentUser.uid);
  try { //.then or catch me bh ho sakta ha ye kam yhn try catch me hoa ha kam 1 he bat ha
    const docRef = await addDoc(collection(db, "posts"), {
      title: title.value,
      description: description.value,
      uid: auth.currentUser.uid //ye uid auth ko log me kr k kis me ha currentUser me curentUser k uid me to obj k dot kr k nikalna ha sb kuch ye obj me save hota ha firebase ka to is lye nikalna ha 
    });
    console.log("Document written with ID: ", docRef.id);
    getDataFromFirestore(); //jb hum bhej rahy hn to manwane wly ko yhn call bh krna hoga to idhr call kia

  } catch (e) {
    console.error("Error adding document: ", e);
  }
})



//********FIRESTORE*********

/*firestore me data collection form ki array me store hota ha
collection k andr document bante hn 
SQL databases are relational (structured query language) vertically
NoSQL databases are non-relational(dynamic, unstructured) horizontally */

/*craete proj continue to cnsol & build click firestore db & click create dtabase
defult pr he next krdo producti mood enable or dosc par gye get started upr name dekhna ha is name pr web namespaced API or docs sy phly import getfirebasefirestore  kia or phir cdn link lgya usme he or compat hta dengy
or neechy get kr k export krdya jhn jhn chahye hoga import kengy iska bh sra kam docs ki dekh dekh kar hoga or firestore ka .then obj utha kr mne us me obj apna lgya or uid hr user ki aye to mne (ye uid auth ko log me kr k kis me ha currentUser me curentUser k uid me to obj k dot kr k nikalna ha sb kuch ye obj me save hota ha firebase ka to is lye nikalna ha )
firebase m data collect me save hota ha or collect name user ha user namechange kr k posts krdya 
phir mne config.js sy firestore cdn link copy kr k collection add docs me firebase firestore cut kr k paste krdya 
{(important)ab tm firebase k cloud firestore me rules me ja kar false ko cut and true likhna ha or publish krdo}
mne phly database me data bjheja ha ab mangwana ha to docs sy collection me getDocs likha or 1 funct neechy bnaya or or whn sy utha kar paste krdya or funct sy phly async lgadia kun k promise return kr rha ha 
collecti name dia users sy hta kar posts or funct call krdya ishe funct k consol me doc id hta den to data consol me ajayega or bad me funct bante he 1 empty 1 arry bnya or consol sy phly push krwa dia doc data

phir bootstrap ki css & javas ki link lage or 1 card utha kar dashboard.html pr div bna kar dal dia or parent div ko id or clas di or usko style krlo or phir card ko cut kardengy parent div container ko wahin rehne dengy
card ko js file par lgna ha to is lye cut kia or id card ki is id se js file me get krna ha jis function se database sy mangwna ha 
or hr item par map chaylya map sy lekar ayega  us me cut card wala paste kia consol k neechy or phir hamne span tag jhn closed thy whn $ sign curli braket item.title exmp (${item.title}) or agya ka text jo demo par likha tha wo cut kra
phr jitni bh datatbase ka data jo hoga wo change ho jayega or phr jhn hm databas sy dta bhej rahy hn whn try me last me call karengy mangwane wle ko or event.prevent default ko k neechy card.inner html ko empty karedngy tak wo phly sy empty rahy jo new type kare wo db or hmary brwoser me aye 
*/