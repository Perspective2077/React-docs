import CodeBox from "../Notes-Templates/CodeBox";
import Footer from "../Notes-Templates/Footer";
import Heading from "../Notes-Templates/Heading";
import SubHeading from "../Notes-Templates/SubHeading";
import Note from "../Notes-Templates/Note";
import Paragraph from "../Notes-Templates/Paragraph";
import GridMaker from "../Notes-Templates/GridMaker"
import Images from "../Notes-Templates/Images"


export default function LandingPage() {
  return (
    <>
    {/* Btw customize all of these i have specific use case so i didnt waste/invested time here  */}
      <Heading Topic="Heading" />

{/* Have 4 types of color in info part */}
      <SubHeading Topic="SubHeading" info="Extra info in Subheading" colorType="blue" /> 

      <Paragraph Paragraph={<>Paragrah that can have html also</>} /> 


       {/* Have three type attribute each having different colors  */}
      <Note type="tip" Note="Note" /> <br />
      {/* Need to break lines between notes and CodeBox */}
    
    {/* Have three options , 1. with all thing , 2. without Clipboard , 3. Without anything i.e place attribut and clipboard */}
      <CodeBox place="Original.js" code={`Codde Box `} />

  {/* Customize this because i had specific usecase so */}
  {/* Takes an array containing objects , each object have two thing name aka the heading second info aka small info */}
 <GridMaker List={[
  {
  name : "Main heading",
  info : "Small info" ,
  
  }]}  />


{/* takes url , size , preivieve size aka size when click */}
  <Images size="5rem" previewSize="20rem" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s" />

 


     {/* Can have both attribute and works without any of them also */}
      <Footer previous="/docs/" next="/docs/"   />
    </>
  );
};  