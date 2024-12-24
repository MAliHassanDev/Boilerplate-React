import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useColorScheme } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const SwitchTheme = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
        minHeight: "56px",
      }}
    >
      <FormControl>
        <FormLabel id="select-theme" sx={{ fontSize: 20 }}>
          Select Theme
        </FormLabel>
        <RadioGroup
          aria-labelledby="select-theme"
          name="selected-theme"
          value={mode}
          row
          onChange={(event: React.ChangeEvent) => {
            const target = event.target as HTMLInputElement;
            setMode(target.value as typeof mode);
          }}
        >
          <FormControlLabel
            value="system"
            label="System"
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            value="dark"
            label="Dark"
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            value="light"
            label="Light"
            control={<Radio />}
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default SwitchTheme;
