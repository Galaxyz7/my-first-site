import Accordion from "@mui/material/Accordion";
import Header from "../../components/Header";
import { Box, useTheme, Typography } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors= tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequesntly Asked Questions" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography colors={colors.greenAccent[500]} variant="5h">
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem Ipsum Delorius umpen dior andbe
                </Typography>
            </AccordionDetails>
        </Accordion>


        {/*question 2*/}
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography colors={colors.greenAccent[500]} variant="5h">
                    Another Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Delorius umpen dior andbeLorem Ipsum Delorius umpen dior andbeLorem Ipsum 
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>


}
export default FAQ;