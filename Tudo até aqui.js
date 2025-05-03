@keyframes glow-pulse {
    0% {
      box-shadow: 0 0 10px 2px skyblue;
    }
    50% {
      box-shadow: 0 0 30px 10px skyblue;
    }
    100% {
      box-shadow: 0 0 10px 2px skyblue;
    }
  }
  
  .minha-foto img {
    width: 23vw;
    height: 33vw;
    border-radius: 600px;
    animation: glow-pulse 3s infinite ease-in-out;
  }
  