Step 1
````````
Making Api 

making env file to include all the keys

making mediaapi.js to import the data from api end point using axios fetch can 
also be used but it is famous for having better error management 

Checking the working of each api

CAUGHT IN THE ERROR UNAUTHORIZED ACCESS

401 AND 403 FORBIDDEN AND UNAUTHORIZED ACCESS

masla hl ho giya tha kiya .env ko key ka name diya hoa tha jo ky ni dety simple .env

````````
Step2
```````````
Making a store
using configure Store like a civilized person 
make a store export it use it to wrap a  whole app by provider

```````````
Step3
```````````
Making Slices
Slice1 Search
   first remember one thing that create slice comes from @redux/toolkit
   for making a slice name it anything 
   it has three things 
   first name
   second initial value
   imp trick just like useState first read and 2nd is write only value same concept can be used 
   initial state all read values
   3rd is reducers 
   reducers are actually the main functionality 
   naming it with write value convention like setThis and setThat
   and in that function 
   u r provided with two thing actions and state 
   state what is this like what to display
   action is like what to do exactly
  export all functions from anything.actions 
  export whole slice 
  this whole thing is going to be passed to store 
  same goes to our store no Two Collection

```````````
Step3 
````````````
MAking a navBar 
yani Routing
let me tell about the mess first reducers.actions not action than its initialState not 
initialValue
Few bugs related to import was resolved
also react-redux is one thing and redux/toolkit is another so two npms  
`````````````
Step4
``````````````
Critical part is done Routing done redux done
Only ui is remained 
So i was making search box of my home page where i encontour classic name mismatch error use typescript to avoid this stuff
bhai shab kiya bug tha (state ,action) not (action,state)
and action not actions
 rembember how and from where the storeinitial value comes

 const {query,activeTab,results,loading,error}=useSelector((state)=>(state.Search))
 

``````````````
Step5
``````````````
At the very end what was your error that state and action 2nd typos payloads 
please ankhyen khol kr

``````````````
Step 6 Tenor api funda
`````````````````
Guess what why it was not not working in normalization of api tenor api was not mapped correctlty
dispute resolved in sec of second day ~
`````````````````