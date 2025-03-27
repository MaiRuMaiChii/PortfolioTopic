import React from "react";
import "./style.css";
import {
  FaGithub,
} from "react-icons/fa";
import { socialprofils } from "../contentMe";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
