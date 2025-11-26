import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

const ProjectSchema = Yup.object({
  name: Yup.string().required("Project name is required"),
  description: Yup.string().required("Description is required"),
});

export default function ProjectFormModal({ open, onClose, onSubmit, initial }) {
  const [apiError, setApiError] = useState(""); // <-- store API error messages

  const formik = useFormik({
    initialValues: initial || { name: "", description: "" },
    enableReinitialize: true,
    validationSchema: ProjectSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      setApiError("");
      try {
        await onSubmit(values);
      } catch (err) {

        const data = err?.response?.data;

        if (data && typeof data === "object") {
          const fieldErrors = {};
          if (data.name) fieldErrors.name = data.name.join(" ");
          if (data.description) fieldErrors.description = data.description.join(" ");

          setErrors(fieldErrors);

          // If no known field errors, show default message
          if (!fieldErrors.name && !fieldErrors.description) {
            setApiError(data.detail || "Something went wrong");
          }
        } else {
          setApiError("Something went wrong");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

    // 🔥 Reset form every time modal closes
  useEffect(() => {
    if (!open) {
      formik.resetForm({
        values: initial || { name: "", description: "" },
      });
      setApiError("");
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      scroll="paper"
    >
      <DialogTitle>{initial ? "Edit Project" : "Add Project"}</DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          overflow: "visible",
        }}
      >
        {apiError && <Alert severity="error">{apiError}</Alert>}

        <TextField
          autoFocus
          fullWidth
          label="Project Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          multiline
          minRows={2}
          sx={{ overflowWrap: "break-word", maxWidth: "100%" }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={formik.handleSubmit} disabled={formik.isSubmitting}>
          {initial ? "Save" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
