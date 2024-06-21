import { projects } from "@/const/const";
import { ProjectModal } from "@/ui/organisms/ProjectModal/ProjectModal";

type Props = {
  params?: {
    id?: string;
  };
};

export default function Layout(props: Props) {
  const id = props?.params?.id;
  const project = projects.find((project) => project.id === id);
  return project && <ProjectModal project={project} />;
}
