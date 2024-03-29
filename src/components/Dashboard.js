import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/user-data', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Предполагается, что токен сохранен после успешного входа
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Fetch user data failed');
        }
      } catch (error) {
        console.error('Fetch user data error:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <>
          <p>Welcome, {userData.username}!</p>
          {/* Вывод данных пользователя, например, его тренировки и приемы пищи */}
        </>
      ) : (
        <p>Please login or register</p>
      )}
    </div>
  );
};

export default Dashboard;