import ProjectCard from "../ProjectCard";
import ProjectCardNotLive from "../ProjectCardNotLive";
import ProjectCardNoRepo from "../ProjectCardNoRepo";

const Projects = (props) => {
  const { projectList } = props;
  return (
    <div className="space-y-8">
      <p className="text-center text-2xl underline decoration-cyan-400 decoration-2 underline-offset-8">
        Projects
      </p>
      <div className="flex justify-center flex-wrap ">
        {projectList.map((o) => {
          if (o.repoLink === "") {
            return (
              <ProjectCardNoRepo
                title={o.title}
                imgSrc={o.imgSrc}
                liveLink={o.liveLink}
              />
            );
          } else if (o.liveLink !== "") {
            return (
              <ProjectCard
                title={o.title}
                imgSrc={o.imgSrc}
                repoLink={o.repoLink}
                liveLink={o.liveLink}
              />
            );
          } else {
            return <ProjectCardNotLive title={o.title} repoLink={o.repoLink} />;
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
