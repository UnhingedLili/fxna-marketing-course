import React from "react";
import "./Dashboard.css";
import thumbnail from "/src/assets/images/thumbnail.jpeg";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Prologue</h2>
      <div className="video-placeholder">
        <img src={thumbnail} alt="Video Placeholder" className="thumbnail" />
        <div className="play-button">▶</div>
      </div>
      <ul className="lesson-input">
        <li>
          <div>
            <label htmlFor="lesson-1">
              <h4>Lesson 1</h4>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                </svg>
              </span>
            </label>
            <input
              type="checkbox"
              className="lesson-1"
              id="lesson-1"
              name="lesson"
              value="lesson-1"
            />
            <div className="content">
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, nisi laudantium nobis quam neque in pariatur fuga aliquam, blanditiis cum recusandae officia fugit praesentium ex totam nam exercitationem aspernatur? Inventore?Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <img src={thumbnail} alt="Video Placeholder" className="thumbnail" />
              </div>
              <div>
              <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nostrum
                    repudiandae odit quidem magni iusto quos voluptatum aspernatur ipsum sint
                    ducimus architecto dolor laudantium molestias explicabo deserunt,
                    perferendis in? Dolor? Nulla facilisi. Proin auctor ligula at arcu
                    volutpat.
                  </p>
                  <span className="view-more">

                    <svg
                    className="custom-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                    </svg>
                    View More
                  </span>
                </div>              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <label htmlFor="lesson-2">
              Lesson 2
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                </svg>
              </span>
            </label>
            <input
              type="checkbox"
              className="lesson-2"
              id="lesson-2"
              name="lesson"
              value="lesson-2"
            />
            <div className="content">
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, nisi laudantium nobis quam neque in pariatur fuga aliquam, blanditiis cum recusandae officia fugit praesentium ex totam nam exercitationem aspernatur? Inventore?Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <img src={thumbnail} alt="Video Placeholder" className="thumbnail" />
              </div>
              <div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nostrum
                    repudiandae odit quidem magni iusto quos voluptatum aspernatur ipsum sint
                    ducimus architecto dolor laudantium molestias explicabo deserunt,
                    perferendis in? Dolor? Nulla facilisi. Proin auctor ligula at arcu
                    volutpat.
                  </p>
                  <span className="view-more">

                    <svg
                    className="custom-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                    </svg>
                    View More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <label htmlFor="lesson-3">
              Lesson 3
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                </svg>
              </span>
            </label>
            <input
              type="checkbox"
              className="lesson-3"
              id="lesson-3"
              name="lesson"
              value="lesson-3"
            />
            <div className="content">
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, nisi laudantium nobis quam neque in pariatur fuga aliquam, blanditiis cum recusandae officia fugit praesentium ex totam nam exercitationem aspernatur? Inventore?Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <img src={thumbnail} alt="Video Placeholder" className="thumbnail" />
              </div>
              <div>
              <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nostrum
                    repudiandae odit quidem magni iusto quos voluptatum aspernatur ipsum sint
                    ducimus architecto dolor laudantium molestias explicabo deserunt,
                    perferendis in? Dolor? Nulla facilisi. Proin auctor ligula at arcu
                    volutpat.
                  </p>
                  <span className="view-more">

                    <svg
                    className="custom-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                    </svg>
                    View More
                  </span>
                </div>              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <label htmlFor="lesson-4">
              Lesson 4
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                </svg>
              </span>
            </label>
            <input
              type="checkbox"
              className="lesson-4"
              id="lesson-4"
              name="lesson"
              value="lesson-4"
            />
            <div className="content">
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, nisi laudantium nobis quam neque in pariatur fuga aliquam, blanditiis cum recusandae officia fugit praesentium ex totam nam exercitationem aspernatur? Inventore?Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <img src={thumbnail} alt="Video Placeholder" className="thumbnail" />
              </div>
              <div>
              <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nostrum
                    repudiandae odit quidem magni iusto quos voluptatum aspernatur ipsum sint
                    ducimus architecto dolor laudantium molestias explicabo deserunt,
                    perferendis in? Dolor? Nulla facilisi. Proin auctor ligula at arcu
                    volutpat.
                  </p>
                  <span className="view-more">

                    <svg
                    className="custom-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                    </svg>
                    View More
                  </span>
                </div>              </div>
            </div>
          </div>
        </li>
        <li>
          <div>
            <label htmlFor="lesson-5">
              Lesson 5
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                </svg>
              </span>
            </label>
            <input
              type="checkbox"
              className="lesson-5"
              id="lesson-5"
              name="lesson"
              value="lesson-5"
            />
            <div className="content">
              <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, nisi laudantium nobis quam neque in pariatur fuga aliquam, blanditiis cum recusandae officia fugit praesentium ex totam nam exercitationem aspernatur? Inventore?Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div>
                <img src={thumbnail} alt="Video Placeholder" className="thumbnail" />
              </div>
              <div>
              <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nostrum
                    repudiandae odit quidem magni iusto quos voluptatum aspernatur ipsum sint
                    ducimus architecto dolor laudantium molestias explicabo deserunt,
                    perferendis in? Dolor? Nulla facilisi. Proin auctor ligula at arcu
                    volutpat.
                  </p>
                  <span className="view-more">

                    <svg
                    className="custom-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                    </svg>
                    View More
                  </span>
                </div>              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;