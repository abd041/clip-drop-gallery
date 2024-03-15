import React from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import ImageUpscaler from "../components/imageUpscaler/ImageUpscaler";
import UploadImage from "../components/uploadImage/UploadImage";
import Stats from "../components/stats/Stats";
import DesignEnhance from "../components/designEnhance/DesignEnhance";
import UseCases from "../components/UseCases/UseCases";
import Services from "../components/services/Services";
import GetAPI from "../components/getAPI/GetAPI";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";
import UseCasesMainPage from "../components/UseCases/UseCasesMainPage";
import Prompt from "../components/prompt/prompt";
import DislikeModal from "../components/modals/DislikeModal";
import ExamplePrompt from "../components/prompt/examplePropmt";
import EhnanceImage from "../assest/videos/enhance.jpg";
function HomePage() {
  return (
    <div className="">
      <NavigationBar />
      <div className="page-wrapper">
        <ImageUpscaler
          title="IMAGE UPSCALER"
          description=" Upscale, denoise and enhance your images in seconds"
          image={EhnanceImage}
        />
        <UploadImage />
        <Stats />
        <DislikeModal />
        <UseCases />
        <ExamplePrompt />
        <UseCasesMainPage />
        <Services />
        <GetAPI />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
