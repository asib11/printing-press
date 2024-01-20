import Book from "../Book/Book";
import BusinessCard from "../BusinessCard/BusinessCard";
import LetterHead from "../LetterHead/LetterHead";
import Tshirt from "../Tshirt/Tshirt";
import PaperFile from "../PaperFile/PaperFile";
import Envelope from "../Envelope/Envelope";
import Box from "../Box/Box";
import RollUp from "../RollUp/RollUp";
import Gifting from "../Gifting/Gifting";
import Sign from "../Sign/Sign";
import WallGraphics from "../WallGraphics/WallGraphics";
import Vehicle from "../Vehicle/Vehicle";

const AllServices = () => {
    return (
        <div>
            <BusinessCard></BusinessCard>
            <LetterHead></LetterHead>
            <Envelope></Envelope>
            <Book></Book>
            <Box></Box>
            <PaperFile></PaperFile>
            <RollUp></RollUp>
            <Gifting></Gifting>
            <Sign></Sign>
            <Tshirt></Tshirt>
            <WallGraphics></WallGraphics>
            <Vehicle></Vehicle>
        </div>
    );
};

export default AllServices;