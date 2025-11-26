import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";

export default function ProjectViewModal({ open, onClose, project }) {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ borderBottom: "1px solid #ddd", borderRadius: 0 }}>
        Project Details
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          my: 2
        }}
      >
        <Box>
          <Typography variant="caption" color="text.secondary">
            Name
          </Typography>
          <Typography variant="body1">{project.name || "—"}</Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="caption" color="text.secondary">
            Description
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
            {project.description || "—"}
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="caption" color="text.secondary">
            Created At
          </Typography>
          <Typography variant="body1">
            {project.created_at
              ? new Date(project.created_at).toLocaleString()
              : "—"}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ borderTop: "1px solid #ddd", borderRadius: 0 }}>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
