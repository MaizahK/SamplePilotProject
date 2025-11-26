import { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";

import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../services/projects";

import ProjectFormModal from "../components/ProjectFormModal";
import ProjectViewModal from "../components/ProjectViewModal";

export default function Projects() {
  const theme = useTheme();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const [viewOpen, setViewOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { data } = await getProjects();
      setRows(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAdd = async (values) => {
    await addProject(values);
    setModalOpen(false);
    fetchProjects();
  };

  const handleEdit = async (values) => {
    await updateProject(editProject.id, values);
    setModalOpen(false);
    setEditProject(null);
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    fetchProjects();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Project Name", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
      valueGetter: (value) => new Date(value).toLocaleString(),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          {/* VIEW */}
          <IconButton
            color="primary"
            onClick={() => {
              setSelectedProject(params.row);
              setViewOpen(true);
            }}
          >
            <VisibilityIcon />
          </IconButton>

          {/* EDIT */}
          <IconButton
            color="primary"
            onClick={() => {
              setEditProject(params.row);
              setModalOpen(true);
            }}
          >
            <EditIcon />
          </IconButton>

          {/* DELETE */}
          <IconButton
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography sx={{ color: theme.palette.text.secondary }} fontWeight={600}>
          List of Projects
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditProject(null);
            setModalOpen(true);
          }}
        >
          Add Project
        </Button>
      </Box>

      <div style={{ height: 500 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          disableRowSelectionOnClick
        />
      </div>

      {/* EDIT/ADD */}
      <ProjectFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initial={editProject}
        onSubmit={editProject ? handleEdit : handleAdd}
      />

      {/* VIEW */}
      <ProjectViewModal
        open={viewOpen}
        onClose={() => setViewOpen(false)}
        project={selectedProject}
      />
    </Box>
  );
}
