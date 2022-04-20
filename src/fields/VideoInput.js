import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import { useController } from "react-hook-form";

import VideocamIcon from "@mui/icons-material/Videocam";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function VideoInput({ control, name, label }) {
  const { field } = useController({ control, name });
  return (
    <>
      <label htmlFor="icon-button-file">
        <input
          accept="video/*"
          type="file"
          id="icon-button-file"
          multiple
          style={{ display: "none" }}
          onChange={(e) => {
            field.onChange(Array.from(e.target.files));
          }}
        />
        <IconButton
          color="primary"
          aria-label="Загрузите видео"
          component="span"
        >
          <VideocamIcon />
        </IconButton>
      </label>
      {field?.value && (
        <ImageList sx={{ width: "100%", height: 450 }} cols={3} rowHeight={164}>
          {field.value.map((item, index) => (
            <ImageListItem key={index}>
              <video controls loading="lazy">
                <source src={URL.createObjectURL(item)} />
              </video>
              <ImageListItemBar
                sx={{ background: "rgba(0,0,0,0)" }}
                position="top"
                actionPosition="right"
                actionIcon={
                  <IconButton sx={{ color: "black" }}>
                    <DeleteForeverIcon />
                  </IconButton>
                }
                onClick={() =>
                  field.onChange(field.value.filter((_, idx) => idx !== index))
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </>
  );
}
