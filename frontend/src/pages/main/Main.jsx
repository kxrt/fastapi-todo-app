import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import styles from "./Main.module.css";
import Hero from "./images/illustration-hero.svg";
import BgDesktop from "./images/pattern-background-desktop.svg";
import BgMobile from "./images/pattern-background-mobile.svg";

const Main = () => {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = "Todo App";
    axios.get("http://127.0.0.1:8000/read_all").then((response) => {
      console.log(response);
      setTasks(response.data.items);
    }).catch((error) => {
      alert(error)
      });
  }, []);

  const onSubmit = (data) => {
    data["id"] = tasks.length + 1;
    axios.post("http://127.0.0.1:8000/add", data).then((response) => {
      console.log(response);
      setTasks([data, ...tasks]);
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.bgDesktop}>
        <img src={BgDesktop} alt="Background Illustration" />
      </div>
      <div className={styles.bgMobile}>
        <img src={BgMobile} alt="Background Illustration" />
      </div>
      <div className={styles.sideBySidePanel}>
        <div className={styles.boundingBox}>
          <div className={styles.heroImage}>
            <img src={Hero} alt="Hero" />
          </div>
          <div className={styles.informationBox}>
            <div className={styles.heading}>Todo App 📝</div>
            <div className={styles.orderDescription}>
              Add your tasks here and never forget them! Every task includes a
              description and a due date.
            </div>
            <div className={styles.orderDetails}>
              <form
                className={styles.addTaskForm}
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  type="text"
                  placeholder="Add a task"
                  {...register("description")}
                />
                <input type="date" {...register("due")} />
                <button className={styles.addTaskButton} type="submit">
                  Add
                </button>
              </form>
              <br />
            </div>
          </div>
        </div>
        <div className={styles.boundingBox}>
          <div className={styles.heading}>Tasks</div>
          {tasks.map((task) => (
            <div className={styles.taskBox} key={task.id}>
              <div className={styles.taskDescription}>{task.description}</div>
              <div className={styles.taskDueDate}>Due: {task.due}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
