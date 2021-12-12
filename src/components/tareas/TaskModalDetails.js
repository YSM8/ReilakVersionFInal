import React, { useState } from "react";
import Modal from "react-modal";
import { TaskModalDetailsForm } from "./TaskModalDetailsForm";

export const TaskModalDetails = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "$blanco-2",
    },
    overlay: {
      transition: "opacity .2s ease-in-out",
      backgroundColor: "rgba(53, 5, 5, 0.3)",
    },
  };

  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.close}
      style={customStyles}
      closeTimeoutMS={200}
    >
      <div className="task__details">
        <div className="task__details-content-left">
        <TaskModalDetailsForm />
          <div className="task__details-content-state">
            <span>Estado</span>{" "}
            <span className="task-state-green">Completo</span>
          </div>
          <div className="task__details-content-attachment">
            <div className="task__details-content-attachment-title">
              <i class="fas fa-paperclip"></i>Adjuntos
            </div>
            <div>
              <form action="#">
                <label htmlFor="">Carar archivo</label>
                <input type="file" />
              </form>
            </div>
            <div className="task__details-content-attachment-files">
              <div className="task__details-content-attachment-files-item">
                <div className="task__details-content-attachment-files-preview">
                  <img
                    src="https://i.blogs.es/04b04a/maxresdefault-50/840_560.jpeg"
                    alt=""
                  />
                </div>
                <div className="task__details-content-attachment-files-details">
                  <div className="task__details-content-attachment-files-details-name">
                    Extension: jpg
                  </div>
                  <div className="task__details-content-attachment-files-details-name">
                    Subido el: 1 de Nov a las 16:45
                  </div>
                  <div className="task__details-content-attachment-files-details-name">
                    Subido por Victor Almonacid
                  </div>
                  <div className="task__details-content-attachment-files-details-opt">
                    <div>
                      <i class="fas fa-file-download"></i>Descargar
                    </div>
                    <div>
                      <i class="fas fa-trash"></i>Eliminar
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="task__details-content-comments">
            <div className="task__details-content-comments-title">
              <i class="fas fa-comment-alt"></i> Comentarios
            </div>
            <div className="task__details-content-comments-list">
              <div className="task__details-content-comments-list-item">
                <div className="task__details-content-comments-list-item-picture">
                  <img
                    src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/124546598/original/8c50012ce1a9add1ce367141bfce829e96d0063b/draw-a-cute-anime-manga-girl-face.png"
                    alt=""
                  />
                </div>
                <div className="task__details-content-comments-list-item-info">
                  <div className="task__details-content-comments-list-item-name">
                    <strong>Victor Almonacid</strong> <span>hace 2 Hrs</span>
                  </div>
                  <div className="task__details-content-comments-list-item-text">
                    Mollit officia esse ex commodo labore Lorem ullamco
                    adipisicing est exercitation. Qui consectetur irure ex dolor
                    magna in velit velit qui ofdsadadasdsadsQui consectetur
                    irure ex dolor magna in velit velit qui ofdsadadasdsadsQui
                    consectetur irure ex dolor magna in velit velit qui
                    ofdsadadasdsads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="task__details-members">
          <div className="task__details-members-title">
            <h3>Miembros</h3>
          </div>
          <div className="task__details-members-opts">
            <div className="input-button">
              <button type="submit">Agregar Miembros</button>
            </div>
          </div>
          
          <div className="task__details-members-list">
            <div className="task__details-members-list-item">
              <div className="task__details-members-list-item-picture">
                <img
                  src="https://www.vhv.rs/file/max/7/79148_sad-anime-eyes-png.png"
                  alt=""
                />
              </div>
              <div className="task__details-members-list-item-info">
                <div className="task__details-members-list-item-name">
                  Yonathan Esteban <br />
                  Soto Martinez
                </div>
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
