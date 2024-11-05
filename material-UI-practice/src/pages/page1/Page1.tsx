import { Alert, AlertTitle, Box, Button, Modal } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

function Page1() {
    const cities = [
        { title: "Abbottabad" },
        { title: "Attock" },
        { title: "Bahawalnagar" },
        { title: "Bahawalpur" },
        { title: "Bannu" },
        { title: "Bhalwal" },
        { title: "Burewala" },
        { title: "Chaman" },
        { title: "Chiniot" },
        { title: "Chichawatni" },
        { title: "Dadu" },
        { title: "Dera Bugti" },
        { title: "Dera Ghazi Khan" },
        { title: "Dera Ismail Khan" },
        { title: "Dir" },
        { title: "Faisalabad" },
        { title: "Fort Abbas" },
        { title: "Gujranwala" },
        { title: "Gujrat" },
        { title: "Haripur" },
        { title: "Hala" },
        { title: "Hangu" },
        { title: "Hyderabad" },
        { title: "Islamabad" },
        { title: "Jacobabad" },
        { title: "Jhang" },
        { title: "Jhelum" },
        { title: "Joiya" },
        { title: "Kamoke" },
        { title: "Kahror Pakka" },
        { title: "Karachi" },
        { title: "Khanewal" },
        { title: "Killar Syedan" },
        { title: "Kohat" },
        { title: "Kot Addu" },
        { title: "Kotli" },
        { title: "Lahore" },
        { title: "Larkana" },
        { title: "Lasbela" },
        { title: "Lower Dir" },
        { title: "Mardan" },
        { title: "Mandi Bahauddin" },
        { title: "Mianwali" },
        { title: "Mirpur Khas" },
        { title: "Multan" },
        { title: "Murree" },
        { title: "Nankana Sahib" },
        { title: "Narowal" },
        { title: "Nowshera" },
        { title: "Okara" },
        { title: "Pabbi" },
        { title: "Pakpattan" },
        { title: "Peshawar" },
        { title: "Qambar Shahdadkot" },
        { title: "Quetta" },
        { title: "Rahim Yar Khan" },
        { title: "Rawalpindi" },
        { title: "Sadiqabad" },
        { title: "Sargodha" },
        { title: "Sheikhupura" },
        { title: "Shikarpur" },
        { title: "Shorkot" },
        { title: "Sialkot" },
        { title: "Sukkur" },
        { title: "Tando Adam" },
        { title: "Tando Allahyar" },
        { title: "Tando Muhammad Khan" },
        { title: "Toba Tek Singh" },
        { title: "Usta Muhammad" },
        { title: "Vehari" },
        { title: "Wazirabad" },
        { title: "Zafarwal" },
    ];
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [selectedValue, setSelectedValue] = useState<any>(null); // State to hold selected value
    const [showAlert, setShowAlert] = useState(false)
    const [open, setOpen] = useState(false);
    function OpenAlert() {
        setShowAlert(true)
    }
    function CloseAlert() {
        setShowAlert(false)
    }
    function handleOpen() {
        setOpen(true)
    }
    function handleOnClose() {
        setOpen(false)
    }
    return (
        <div className="container">
            {showAlert &&
                (<Alert severity="success" variant="filled" onClose={CloseAlert}>
                    <AlertTitle>successful</AlertTitle>
                    The Alert Button clicked
                </Alert>)}
            {/* ............................................................................ */}
            <Autocomplete
                options={cities} // Options for autocomplete
                getOptionLabel={(option) => option.title} // Correctly use the 'title' property for labels
                sx={{ width: 300 }} // Set the width of the autocomplete
                renderInput={(params) => <TextField {...params} label="Cities" />} // Render the input field
                value={selectedValue} // Controlled value for autocomplete
                autoHighlight // Highlight the first option by default
                onChange={(event, value) => setSelectedValue(value)} // Update state on selection
            />

            {selectedValue && <p><strong>selected City: </strong>{selectedValue.title}</p>}
            {/* ......................................................................................... */}

            <Tooltip title="show tooltip on botton hover" arrow placement="top-end">
                <Button variant="contained" color="secondary">button</Button>
            </Tooltip>
            {/* ................................................................ */}
            <Button variant="contained" color="primary" onClick={OpenAlert}>show Alert</Button>

            {/* ................................................. */}
            <Button variant="contained" color="secondary" onClick={handleOpen}>open Model</Button>
            <Modal open={open} onClose={handleOnClose}>
                <Box sx={{ ...style, width: 400 }}>
                    <h2>Modal Title</h2>
                    <p>This is the content of the modal.</p>
                    <Button variant="outlined" color="error" onClick={handleOnClose}>Close</Button>
                </Box>
            </Modal>








        </div>

    );
}

export default Page1;
