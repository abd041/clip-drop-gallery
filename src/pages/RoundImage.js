import React from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import Footer from "../components/footer/Footer";
import RoundImageComponent from "../components/RoundImage/RoundImage";
function RoundImage({ industry }) {
  return (
    <div>
      <NavigationBar />

      <div className="round-image-main-wrapper">
        <RoundImageComponent
          // order1={1}
          // order2={2}
          title={"Why not try a colorful circle-cropped image?"}
          text="Round profile pictures continue to be seen as modern and
                up-to-date, reflecting the current design trends and user
                preferences in digital interfaces. Create a modern, but still
                unique profile picture with the creative templates of PhotoRoom."
          img="/images/round_profil_picture_1.webp"
        />
        <RoundImageComponent
          order1={"md-2"}
          order2={"md-1"}
          title={"Change multiple photos in one go"}
          text={
            "With the help of the Batchmode option, you are able to upload multiple photos and to apply the round profile template at the same time to all images. It saves time and spares your nerves. Try it out now!"
          }
          img="/images/round_profil_picture_2.webp"
        />
        <RoundImageComponent
          // order1={1}
          // order2={2}
          title={"Create the perfect profile picture for you"}
          text={
            "You also have the possibility change the style of the round profile and also further personalizing it. You are able to change the color of the background or adjust your photo to black and white. You can also resize the image or add additional text to the image, if you want to!"
          }
          img="/images/round_profil_picture_3.webp"
        />
      </div>

      {industry ? null : <Footer />}
    </div>
  );
}

export default RoundImage;
