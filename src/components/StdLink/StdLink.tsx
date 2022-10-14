import { ReactNode, FC } from "react";
import { ConfigProvider } from "vcc-ui";
import { Link as RouterLink } from "react-router-dom";

type StdLinkProps = {
  internal?: boolean;
  children: ReactNode;
};

const StdLink: FC<StdLinkProps> = ({ internal = true, children }) => {
  const config = {
    linkComponent: ({ children, href, ...rest }: { children: ReactNode; href: string }) => {
      if (internal) {
        return (
          <RouterLink to={href} {...rest}>
            {children}
          </RouterLink>
        );
      }

      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      );
    },
  };

  return <ConfigProvider config={config}>{children}</ConfigProvider>;
};

export default StdLink;
