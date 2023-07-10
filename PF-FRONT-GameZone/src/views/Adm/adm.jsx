import styles from './adm.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  //Form Game
  const [showForm, setShowForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [requiredAge, setRequiredAge] = useState('');
  const [isFree, setIsFree] = useState('');
  const [detailedDescription, setDetailedDescription] = useState('');
  const [aboutTheGame, setAboutTheGame] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [comingSoon, setComingSoon] = useState('');
  const [supportInfo, setSupportInfo] = useState('');
  const [metacritic, setMetacritic] = useState('');
  const [priceOverview, setPriceOverview] = useState('');
  const [headerImage, setHeaderImage] = useState('');
  const [capsuleImage, setCapsuleImage] = useState('');
  const [developers, setDevelopers] = useState('');
  const [genres, setGenres] = useState('');
  const [publishers, setPublishers] = useState('');
  const [platform, setPlatform] = useState('');
  const [languages, setLanguages] = useState('');
  const [categories, setCategories] = useState('');

  // Form User
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleGameSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário de criação de jogo
    console.log('Dados do formulário de criação de jogo:', {
      name,
      type,
      requiredAge,
      isFree,
      detailedDescription,
      aboutTheGame,
      shortDescription,
      releaseDate,
      comingSoon,
      supportInfo,
      metacritic,
      priceOverview,
      headerImage,
      capsuleImage,
      developers,
      genres,
      publishers,
      platform,
      languages,
      categories
    });
    // Limpar os campos do formulário após o envio
    setName('');
    setType('');
    setRequiredAge('');
    setIsFree('');
    setDetailedDescription('');
    setAboutTheGame('');
    setShortDescription('');
    setReleaseDate('');
    setComingSoon('');
    setSupportInfo('');
    setMetacritic('');
    setPriceOverview('');
    setHeaderImage('');
    setCapsuleImage('');
    setDevelopers('');
    setGenres('');
    setPublishers('');
    setPlatform('');
    setLanguages('');
    setCategories('');
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados do formulário de criação de usuário
    console.log('Dados do formulário de criação de usuário:', {
      userName,
      email,
      password,
      confirmPassword,
      role
    });
    // Limpar os campos do formulário após o envio
    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRole('user');
  };

  const handleCreateGameClick = () => {
    setShowForm(true);
    setShowUserForm(false);
  };

  const handleCreateUserClick = () => {
    setShowUserForm(true);
    setShowForm(false);
  };

  return (
    <html>
      <head></head>
      <body>
        <div className={styles.area}></div>
        <nav className={styles.main_menu}>
          <ul>
            <li>
              <Link to="/home" className={styles.nav_link}>
                <i className={`fa fa-home ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <a href="#" onClick={handleCreateGameClick}>
                <i className={`fa fa-cogs ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Create Game
                </span>
              </a>
            </li>
            <li>
              <a href="#" onClick={handleCreateUserClick}>
                <i className={`fa fa-user ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Create User
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`fa fa-shopping-cart ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Sales
                </span>
              </a>
            </li>
          </ul>
          <ul className="logout">
            <li>
              <Link to="/login">
                <i className={`fa fa-power-off ${styles["fa-2x"]}`}></i>
                <span className={styles.nav_text}>
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {showForm && (
          <div className={styles.cardContainer}>
            <div>
              <button className={styles.close} onClick={() => setShowForm(!showForm)}>X</button>
            </div>
            <div className={styles.form1}>
              <h2>Product Creation</h2>
              <form onSubmit={handleGameSubmit}>
                <label>
                  Name Game:
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                  Type:
                  <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                </label>

                <label>
                  Required Age:
                  <input type="number" value={requiredAge} onChange={(e) => setRequiredAge(e.target.value)} />
                </label>

                <label>
                  Is Free:
                  <input type="text" value={isFree} onChange={(e) => setIsFree(e.target.value)} />
                </label>

                <label>
                  Detailed Description:
                  <textarea value={detailedDescription} onChange={(e) => setDetailedDescription(e.target.value)} />
                </label>

                <label>
                  About the Game:
                  <textarea value={aboutTheGame} onChange={(e) => setAboutTheGame(e.target.value)} />
                </label>

                <label>
                  Short Description:
                  <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
                </label>



                <label>
                  Release Date:
                  <input type="text" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                </label>

                <label>
                  Coming Soon:
                  <input type="text" value={comingSoon} onChange={(e) => setComingSoon(e.target.value)} />
                </label>

                <label>
                  Support Info:
                  <textarea value={supportInfo} onChange={(e) => setSupportInfo(e.target.value)} />
                </label>

                <label>
                  Metacritic:
                  <input type="text" value={metacritic} onChange={(e) => setMetacritic(e.target.value)} />
                </label>

                <label>
                  Price Overview:
                  <input type="text" value={priceOverview} onChange={(e) => setPriceOverview(e.target.value)} />
                </label>
                <label>
                  Capsule Image:
                  <input type="text" value={capsuleImage} onChange={(e) => setCapsuleImage(e.target.value)} />
                </label>

                <label>
                  Developers:
                  <input type="text" value={developers} onChange={(e) => setDevelopers(e.target.value)} />
                </label>

                <label>
                  Genres:
                  <input type="text" value={genres} onChange={(e) => setGenres(e.target.value)} />
                </label>

                <label>
                  Platform:
                  <input type="text" value={platform} onChange={(e) => setPlatform(e.target.value)} />
                </label>

                <label>
                  Languages:
                  <input type="text" value={languages} onChange={(e) => setLanguages(e.target.value)} />
                </label>

                <label>
                  Categories:
                  <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} />
                </label>
                
                <label>
                  URL Image:
                  <input type="text" value={headerImage} onChange={(e) => setHeaderImage(e.target.value)} />
                </label>

                <input className={styles.button2} type="submit" value="Create Game" />
              </form>
            </div>
          </div>
        )}

        {showUserForm && (
          <div className={styles.cardContainer}>
            <div>
            <button className={styles.close} onClick={() => setShowUserForm(!showUserForm)}>X</button>
            </div>
            <div className={styles.form1}>
              <h2>Create User</h2>
              <form onSubmit={handleUserSubmit}>
                <label>
                  Name:
                  <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                  Email:
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                  Password:
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                  Confirm Password:
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <label>
                  Select a Role:
                  <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>
                <input className={styles.button2} type="submit" value="Register" />
              </form>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}

export default Dashboard;
