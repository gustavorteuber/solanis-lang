function interpret(code) {
  const lines = code.split(";"); 
  lines.forEach(line => {
      if (line.trim() !== "") { 
          execute(line.trim());
      }
  });
}

function execute(line) {
  const tokens = line.split(" "); 
  const command = tokens[0];
  if (command === "blossom") {
      const message = tokens.slice(1).join(" ");
      console.log(message);
  } else {
      console.error(`Comando desconhecido: ${command}`);
  }
}

module.exports = {
  interpret
};
