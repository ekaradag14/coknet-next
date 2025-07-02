import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionSectionProps {
  title: string;
  items: AccordionItem[];
  backgroundColor?: string;
}

export default function AccordionSection({
  title,
  items,
  backgroundColor = "#F9FAFB",
}: AccordionSectionProps) {
  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius: "12px",
        p: 4,
        mb: 8,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: "36px",
          color: "#111827",
          textAlign: "center",
          mb: 4,
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "8px !important",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#374151" }} />}
              sx={{
                py: 2.5,
                px: 2.5,
                "& .MuiAccordionSummary-content": {
                  margin: "0 !important",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  color: "#111827",
                }}
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2.5, py: 1.5 }}>
              {/* Render HTML for detailed features */}
              <Box
                sx={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#374151",
                  '& ul': {
                    marginBottom: 3,
                    marginTop: 1.5,
                    paddingLeft: 3,
                  },
                  '& li': {
                    fontSize: '17px',
                    lineHeight: '28px',
                    marginBottom: 1.2,
                    listStyleType: 'disc',
                  },
                  '& strong': {
                    fontWeight: 700,
                    fontSize: '19px',
                    display: 'block',
                    marginTop: 2,
                    marginBottom: 1,
                  },
                }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
} 