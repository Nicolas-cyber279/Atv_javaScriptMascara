function MascaraCEP() {

    var CEP = document.getElementById("inpCEP").value;
    console.log("CEP");
    CEP = CEP.slice(0, 11);
    document.getElementById("inpCEP").value = CEP;

    var CepFormatado = CEP;

    if (CepFormatado[2] != ".") {

        if (CepFormatado[2] != undefined) {
            document.getElementById("inpCEP").value = CepFormatado.slice(0, 2) + "." + CepFormatado[2];
        }
    }

    if (CepFormatado[6] != "-") {

        if (CepFormatado[6] != undefined) {
            document.getElementById("inpCEP").value = CepFormatado.slice(0, 6) + "-" + CepFormatado[6];
        }
    }
}

function MascaraCPF() {

    var CPF = document.getElementById("inpCPF").value;
    console.log("CPF");
    CPF = CPF.slice(0, 15);
    document.getElementById("inpCPF").value = CPF;

    var CpfFormatado = CPF;

    if (CpfFormatado[3] != ".") {

        if (CpfFormatado[3] != undefined) {
            document.getElementById("inpCPF").value = CpfFormatado.slice(0, 3) + "." + CpfFormatado[3];
        }
    }

    if (CpfFormatado[7] != ".") {

        if (CpfFormatado[7] != undefined) {
            document.getElementById("inpCPF").value = CpfFormatado.slice(0, 7) + "." + CpfFormatado[7];
        }
    }

    if (CpfFormatado[11] != "-") {

        if (CpfFormatado[11] != undefined) {
            document.getElementById("inpCPF").value = CpfFormatado.slice(0, 11) + "-" + CpfFormatado[11];
        }
    }
}

function MascaraTelefone() {

    var TEL = document.getElementById("inpTelefone").value;
    console.log("Telefone");
    TEL = TEL.slice(0, 20);
    document.getElementById("inpTelefone").value = TEL;

    var TelFormatado = TEL;

    if (TelFormatado[0] != "+") {

        if (TelFormatado[0] != undefined) {
            document.getElementById("inpTelefone").value = TelFormatado.slice(0, 0) + "+55 (" + TelFormatado[0];
        }
    }

    if (TelFormatado[7] != ")") {

        if (TelFormatado[7] != undefined) {
            document.getElementById("inpTelefone").value = TelFormatado.slice(0, 7) + ") " + TelFormatado[7];
        }
    }
    
    if (TelFormatado[14] != "-") {

        if (TelFormatado[14] != undefined) {
            document.getElementById("inpTelefone").value = TelFormatado.slice(0, 14) + "-" + TelFormatado[14];
        }
    }
}

function MascaraCNPJ() { 
    var CNPJ = document.getElementById("inpCNPJ").value;
    console.log("CNPJ");
    CNPJ = CNPJ.slice(0, 18);
    document.getElementById("inpCNPJ").value = CNPJ;

    var CnpjFormatado = CNPJ;

    if (CnpjFormatado[2] != ".") {

        if (CnpjFormatado[2] != undefined) {
            document.getElementById("inpCNPJ").value = CnpjFormatado.slice(0, 2) + "." + CnpjFormatado[2];
        }
    }

    if (CnpjFormatado[6] != ".") {

        if (CnpjFormatado[6] != undefined) {
            document.getElementById("inpCNPJ").value = CnpjFormatado.slice(0, 6) + "." + CnpjFormatado[6];
        }
    }

    if (CnpjFormatado[10] != "/") {

        if (CnpjFormatado[10] != undefined) {
            document.getElementById("inpCNPJ").value = CnpjFormatado.slice(0, 10) + "/" + CnpjFormatado[10];
        }
    }

    if (CnpjFormatado[15] != "-") {

        if (CnpjFormatado[15] != undefined) {
            document.getElementById("inpCNPJ").value = CnpjFormatado.slice(0, 15) + "-" + CnpjFormatado[15];
        }
    }
}

function EnviarFormulario() { 
    alert('Formulário Enviado!')

    document.getElementById("inpNome").value = "";
    document.getElementById("inpEndereco").value = "";
    document.getElementById("inpCEP").value = "";
    document.getElementById("inpCPF").value = "";
    document.getElementById("inpTelefone").value = "";
    document.getElementById("inpCNPJ").value = "";
}