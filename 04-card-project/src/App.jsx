import React from "react";
import Card from "./components/Card";

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPcRbaJvhBgd0YgBp_8nLiSylsEjA-79JncguHiPaRBw&s",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/os-systems/apple-400crthiqdql2xp1h3vb.png/apple-gcdk0hadgcwu2g3gs9vq3n.png?_a=DATAiZAAZAA0",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCK9TcvqaJKizq_N64NWSsHicQfd8DO4k4MbX_NeVBYg&s=10",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/190/699/non_2x/nvidia-logo-nvidia-icon-free-free-vector.jpg",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1740130206",
    companyName: "Adobe",
    datePosted: "8 weeks ago",
    post: "React JS Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/501/non_2x/uber-logo-uber-icon-transparent-free-png.png",
    companyName: "Uber",
    datePosted: "12 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/3840px-Salesforce.com_logo.svg.png",
    companyName: "Salesforce",
    datePosted: "10 weeks ago",
    post: "JavaScript Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote, India"
  }
];
console.log(jobOpenings)

  return (
    <div className="parent">
      {jobOpenings.map(function(elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} location={elem.location}/>
        </div>
      })}
    </div>
  );
};

export default App;
