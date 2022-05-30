import * as React from "react";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

function SubmitButton(props) {
  const [submitting, setSubmitting] = React.useState(false);

  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <LoadingButton
        loading={submitting}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        onClick={() => {
          setSubmitting(true);
          props.onSubmit().then(() => {
            setTimeout(() => setSubmitting(false), 1000);
          });
        }}
        size="large"
        variant="contained"
      >
        Отправить
      </LoadingButton>
    </Box>
  );
}

export default SubmitButton;
