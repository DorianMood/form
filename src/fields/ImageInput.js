import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useController } from "react-hook-form";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ImageInput({ control, name, label }) {
  const { field } = useController({ control, name });
  console.log(field.value);
  return (
    <>
      <label htmlFor="icon-button-file">
        <input
          accept="image/*"
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
          aria-label="Загрузите изображения"
          component="span"
        >
          <PhotoCameraIcon />
        </IconButton>
      </label>
      {field?.value && (
        <ImageList sx={{ width: "100%", height: 450 }} cols={3} rowHeight={164}>
          {field.value.map((item, index) => (
            <ImageListItem key={index}>
              <img src={URL.createObjectURL(item)} loading="lazy" />
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
