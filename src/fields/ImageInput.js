import * as React from "react";
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Collapse,
} from "@mui/material";

import { useController } from "react-hook-form";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ImageInput({ control, name, display }) {
  const { field } = useController({ control, name, display });
  return (
    <>
      <label htmlFor="icon-button-image">
        <input
          accept="image/*"
          type="file"
          id="icon-button-image"
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
          disabled={!display}
        >
          <PhotoCameraIcon />
        </IconButton>
      </label>
      <Collapse in={field.value?.length > 0}>
        {field?.value && (
          <ImageList
            sx={{ width: "100%", maxHeight: 256 }}
            cols={3}
            rowHeight={128}
          >
            {field.value.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={URL.createObjectURL(item)}
                  loading="lazy"
                  alt={item.name}
                />
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
                    field.onChange(
                      field.value.filter((_, idx) => idx !== index)
                    )
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Collapse>
    </>
  );
}
