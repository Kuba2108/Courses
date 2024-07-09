import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="notfound_body">
      <div class="wrapper">
        <div class="container_notFound" data-text="404">
          <p
            onClick={() => {
              navigate("/");
            }}
            className="not_found_home"
          >
            Home
          </p>
          <div class="title glitch" data-text="404">
            404
          </div>
          <div class="description glitch" data-text="PAGE NOT FOUND">
            PAGE NOT FOUND
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
