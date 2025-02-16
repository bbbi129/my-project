import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const visitorData = [
    { name: "1", value: 30 },
    { name: "2", value: 45 },
    { name: "3", value: 35 },
    { name: "4", value: 50 },
    { name: "5", value: 40 },
    { name: "6", value: 55 },
    { name: "7", value: 45 },
  ];

  // const topItems = [
  //   { title: "Circles", number: "#3" },
  //   { title: "Sweet", number: "#32" },
  //   { title: "Pyscho", number: "#44" },
  //   { title: "Mine", number: "#62" },
  // ];

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {/* 사이드바 */}
        <Sidebar />

        {/* 메인 컨텐츠 */}
        <div className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>Home Dashboard</h1>
            <div className={styles.profile}>
              <div className={styles.profileImage} />
              <span>최은비 님</span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.aboutSection}`}>
            {/* 왼쪽 섹션 */}
            <div className={styles.leftSection}>
              <Card className={styles.aboutCard}>
                <CardHeader>
                  <CardTitle>About me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={styles.aboutContent}>
                    <div className={styles.aboutImage}>
                      <img src="/chick.png" alt="Profile" />
                    </div>
                    <div className={styles.aboutText}>
                      <h3>자기소개</h3>
                      <p>
                        새싹 개발자!
                        <br />
                        무한한 성장이 기다리고 있는
                        <br />
                        저를 소개합니다!!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.boardCard}>
                <CardHeader>
                  <CardTitle>Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>게시판 내용이 여기에 표시됩니다.</p>
                </CardContent>
              </Card>
            </div>

            {/* 오른쪽 섹션 */}
            <div className={styles.rightSection}>
              <Card className={styles.weatherCard}>
                <CardHeader>
                  <CardTitle>Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>25/02/12</div>
                  <div className={styles.weatherInfo}>
                    <div>
                      <div>구름 많음</div>
                      <div>종로구 / 27°C</div>
                    </div>
                    <div className={styles.weatherIcon} />
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.top100Card}>
                <CardHeader>
                  <CardTitle>Top 100</CardTitle>
                  <button>+</button>
                </CardHeader>
                <CardContent>...</CardContent>
              </Card>

              <Card className={styles.visitorCard}>
                <CardHeader>
                  <CardTitle>Visitor</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart width={300} height={200} data={visitorData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8884d8"
                      strokeWidth={2}
                      dot={{ strokeWidth: 2 }}
                    />
                  </LineChart>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
