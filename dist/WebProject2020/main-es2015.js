(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-menu></app-menu>\n\n<router-outlet></router-outlet>\n\n<app-rodape></app-rodape>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contato/contato.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contato/contato.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n\n<div class=\"container-fluid\" style=\"text-align:center;\"><br>\n    <div class=\"container-fluid\">     \n        <div class=\"row\">\n        <div class=\"col-sm\">\n            <div class=\"container\">\n                <h3>Fale Conosco</h3>\n                <p> Deixe um comentário, sugestão, elogio ou crítica. Em breve entraremos em contato com você! </p>\n                <form class=\"form-inline\">\n\n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-12\">\n                            <div class=\"alert {{classeCss}}\" role=\"alert\" style=\"width: 100%\" *ngIf=\"flagAlert\">\n                                <strong>Aviso:</strong> &nbsp; {{message}}\n                                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"fechaAviso()\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>                                \n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-2\"><b for=\"nome\">Nome:</b></div>\n                        <div class=\"form-group col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome\" name=\"nome\" \n                            [(ngModel)]=\"object.nome\" [ngModelOptions]=\"{standalone: true}\" style=\"width: 100%\">\n                        </div>                       \n                    </div>       \n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-2\"><b for=\"email\">Email:</b></div>\n                        <div class=\"form-group col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\" \n                            style=\"width: 100%\" [(ngModel)]=\"object.email\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>                       \n                    </div>                          \n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-2\"><b for=\"comentario\">Comentário:</b></div>\n                        <div class=\"form-group col-sm-10\">\n                            <textarea class=\"form-control\" id=\"comentario\" rows=\"3\" placeholder=\"Comentário\"\n                            [(ngModel)]=\"object.comentario\" [ngModelOptions]=\"{standalone: true}\" style=\"width: 100%\"></textarea>\n                        </div>                       \n                    </div>    \n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-8\"></div>\n                        <div class=\"form-group col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"limpaForm()\">Limpar</button>\n                        </div>    \n                        <div class=\"form-group col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"enviar()\">Enviar</button>\n                        </div>                                          \n                    </div>                       \n                </form>\n            </div> <br>                                           \n        </div>\n        <!-- IMAGEM DIREITA -->\n        <div class=\"col-sm\" style=\"margin-top:5%;\">\n            <div><br>\n                <img width=\"300\" alt=\"Angular Logo\" src=\"./../assets/images/0_n3DRTlqqLO7oXyuv.png\">\n            </div>                   \n        </div>\n        </div>\n\n    </div>  \n    </div>\n\n\n    \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n<div class=\"container-fluid\" style=\"text-align:center;\">\n    <h2>20201.5.CMP24100.1N.SUP.02594 (DWEL5) 254494 DESENVOLVIMENTO WEB</h2>\n    <div class=\"container-fluid\">     \n        <div class=\"row\">\n        <div class=\"col-sm bg-success\">\n            <div>\n                <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n            </div>\n        </div>\n        <div class=\"col-sm bg-warning\">\n            <div><br>\n                <img width=\"300\" alt=\"Angular Logo\" src=\"./../assets/images/1200px-Instituto_Federal_de_São_Paulo_-_Marca_Vertical_2015.svg.png\">\n            </div>            \n        </div>\n        <div class=\"col-sm bg-success\">\n            <div><br>\n                <img width=\"300\" alt=\"Angular Logo\" src=\"./../assets/images/0_n3DRTlqqLO7oXyuv.png\">\n            </div>                   \n        </div>\n        </div>\n    </div>  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\"> \n            <h2>Geolocalização RMC de Campinas.</h2>                \n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\"> \n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"adicionaMarcador()\">Cidades visinhas</button> &nbsp;\n            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"adicionaProduto()\">Marcador</button> &nbsp;\n            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"desenhaCampinas()\">Marcar Campinas</button>                           \n        </div>\n    </div><br>\n    <div class=\"row\">\n      <div class=\"map-container\">\n        <div class=\"map-frame\">\n          <div id=\"map\"></div>\n        </div>\n    </div>\n    </div>        \n</div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu/menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n  \n<div style=\"margin-top: 5px;\">\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/principal\">Principal</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contato\">Contato</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/sobre\">Sobre</a>\n      </li>\n    </ul>\n  </nav>\n\n  <br>\n  <hr>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n\n<div class=\"container-fluid\" style=\"text-align:center;\">\n        <h2>Erro!</h2>\n        <div class=\"container-fluid\">     \n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <div><br>\n                        <img width=\"300\" alt=\"Angular Logo\" src=\"./../../assets/images/drawing-clip-art-not-found-thumbnail.jpg\">\n                    </div>                   \n            </div>\n        </div>  \n</div>\n\n\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/principal/principal.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/principal/principal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <app-map></app-map>     \n</div>\n\n    \n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rodape/rodape.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rodape/rodape.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"margin-bottom: 5px;\">\n    <br>\n    <hr>\n    <br>\n    <nav class=\"navbar navbar-expand-sm bg-secondary navbar-dark\">\n        <ul class=\"navbar-nav lateralEsquerda\">\n            <li class=\"nav-item\">\n            <a class=\"nav-link\"> {{textoRodape}} </a>\n            </li>\n        </ul>\n    </nav>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sobre/sobre.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sobre/sobre.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n          <h2>Projeto Final - Desenvolvimento WEB 2020</h2>\n          <p><strong>Nota:</strong> O grupo deverá desenvolver um site que exiba pontos geográficos de acordo com um tema escolhido. Imagine um Google Maps com itens específicos exibidos no mapa como por exemplo praças de Campinas. </p>\n          <div class=\"panel-group\" id=\"accordion\">\n  \n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse1')\">\n                    1. Descrição do projeto</a>\n                </h4>\n              </div>\n              <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll1\">\n                <div class=\"panel-body\">\n                  <ul>\n                    <li>\n                      O grupo deverá desenvolver um site que exiba pontos geográficos de acordo com um tema escolhido. \n                      Imagine um Google Maps com itens específicos exibidos no mapa como por exemplo praças de Campinas.\n                    </li>\n                  </ul>                \n                </div>\n                <div style=\"text-align: center; margin-bottom: 10px;\">\n                  <img width=\"300\" alt=\"Angular Logo\" src=\"./../../assets/images/Captura de tela em 2020-08-06 23-05-42.png\">\n                </div>              \n              </div>\n            </div>\n  \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse2')\">\n                        2. Regras</a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll2\">\n                  <div class=\"panel-body\">\n                    <ul>\n                      <li>\n                        O projeto pode ser feito em duplas ou individual.\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n            </div>\n              \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse3')\">\n                      3. Conteúdo do site e requisitos gerais</a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll3\">\n                  <div class=\"panel-body\">\n                    <p class=\"espEsq\"> a) &nbsp;&nbsp; Os dados de cada ponto devem ser lidos de arquivo Json ou XML.\n                    <p class=\"espEsq\"> b) &nbsp;&nbsp; Cada ponto deve ter, além da sua localização geográfica, no mínimo 3 informações sobre o local. Por exemplo se for uma praça deve conter o nome da praça, inauguração e tamanho. Endereço é obrigatório.\n                    <p class=\"espEsq\"> c) &nbsp;&nbsp; O arquivo de dados deve conter no mínimo 10 itens. Exemplo: Se forem praças devem conter pelo menos 10 praças.\n                    <p class=\"espEsq\"> d) &nbsp;&nbsp; Quando o usuário apontar para algum elemento do mapa uma janela com informações sobre o local devem ser exibidas.\n                    <p class=\"espEsq\"> e) &nbsp;&nbsp; Cada vez que a página for carregada trazer itens em destaque na página principal (fotos). Se forem praças trazer as 3 praças aleatórias em destaque.         \n                    <p class=\"espEsq\"> f) &nbsp;&nbsp; Busca: Deve ser possível consultar os itens por endereço (rua, bairro, cidade).\n                    <p class=\"espEsq\"> g) &nbsp;&nbsp; Deve ser possível marcar alguns itens como como favoritos. Esta marcação deve ficar armazenada no navegador.\n                    <p class=\"espEsq\"> h) &nbsp;&nbsp; Crie um cabeçalho para navegação no site.\n                    <p class=\"espEsq\"> i) &nbsp;&nbsp; Crie uma sessão Fale Conosco onde o usuário pode falar com os responsáveis pelo site. Essa página deve conter um formulário como nome, e-mail do usuário e uma área para ele digitar o comentário.\n                    <p class=\"espEsq\"> j) &nbsp;&nbsp; Um rodapé com o tipo de licenciamento do site.\n                    <p class=\"espEsq\"> k) &nbsp;&nbsp; Uma sessão com informações sobre o projeto e os autores.\n                    <p class=\"espEsq\"> l) &nbsp;&nbsp; O site deve estar armazenado em algum provedor de hospedagem. Considerem utilizar o firebase que é gratuito.  \n                  </div>\n                </div>\n            </div>\n                \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse4')\">\n                      4. Temas</a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll4\">\n                  <div class=\"panel-body\">\n                    <ul>\n                      <li>\n                        Tema 1: Cadastrar em um mapa os pontos culturais da cidade de Campinas.\n                      </li>\n                      <li>\n                        Tema 2: Cadastrar em um mapa todos os locais de atendimento de saúde de Campinas.\n                      </li>\n                      <li>\n                        Tema 3: Cadastrar em um mapa todas as escolas do município de Campinas.\n                      </li>\n                      <li>\n                        Tema 4: Cadastrar em um mapa praças ou centros esportivos públicos.\n                      </li>\n                      <li>\n                        Tema 5: Cadastrar em um mapa as baladas ou bares de Campinas.\n                      </li>\n                      <li>\n                        Tema 6: Cadastrar em um mapa os locais de serviços públicos de Campinas (prefeitura, câmara, inss, etc)\n                      </li>\n                      <li>\n                        Tema 7: Cadastrar em um mapa pontos que lembram a cultura negra em Campinas.\n                      </li>\n                      <li>\n                        Tema 8: Outro (Pergunte para o professor se sua ideia pode ser implementada.\n                      </li>         \n                    </ul>\n                  </div>\n                </div>\n            </div>\n                  \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse5')\">\n                      5. Data da entrega </a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll5\">\n                  <div class=\"panel-body\">\n                    <ul>\n                      <li>\n                        09/09/2020: requisitos de A até E.   \n                      </li>\n                      <li>         \n                        30/09/2020: todos os requisitos.\n                      </li>                \n                    </ul>\n                  </div>\n                </div>\n            </div>\n                    \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse6')\">\n                      6. Avaliação</a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll6\">\n                  <div class=\"panel-body\">\n                    <p class=\"espEsq\">  Critérios de Avaliação &nbsp; / &nbsp; Peso:                        \n                    <p class=\"espEsq\"> a) &nbsp;&nbsp; Organização  &nbsp; <b><i class=\"rColor\">10%</i></b>                  \n                    <p class=\"espEsq\"> b) &nbsp;&nbsp; HTML         &nbsp; <b><i class=\"rColor\">20%</i></b>                  \n                    <p class=\"espEsq\"> c) &nbsp;&nbsp; CSS          &nbsp; <b><i class=\"rColor\">20%</i></b>                  \n                    <p class=\"espEsq\"> d) &nbsp;&nbsp; Javascript   &nbsp; <b><i class=\"rColor\">30%</i></b>                \n                    <p class=\"espEsq\"> e) &nbsp;&nbsp; Hospedagem   &nbsp; <b><i class=\"rColor\">10%</i></b>                   \n                    <p class=\"espEsq\"> f) &nbsp;&nbsp; Apresentação &nbsp; <b><i class=\"rColor\">10%</i></b>    \n                  </div>\n                </div>\n            </div>              \n  \n          </div> \n      </div>\n      <!-- IMAGEM DIREITA -->\n      <div class=\"col-sm-4\" style=\"margin-top:8%;\">\n          <div style=\"margin-left: 10px\"><br>\n              <img width=\"300\" alt=\"Angular Logo\" src=\"./../assets/images/1200px-Instituto_Federal_de_São_Paulo_-_Marca_Vertical_2015.svg.png\">\n          </div>                   \n      </div>    \n    </div>\n\n    <div class=\"col-sm\">\n      <div><br>\n          <a class=\"serif\" target=\"_blank\" href=\"https://www.linkedin.com/in/rewth-nunes-519a2534/\">Desenvolvido por: Rewth Negreiros Nunes</a>\n      </div>                   \n  </div>\n\n  </div>\n\n\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js\"></script>\n\n"

/***/ }),

/***/ "./src/app/_models/collapse-id.model.ts":
/*!**********************************************!*\
  !*** ./src/app/_models/collapse-id.model.ts ***!
  \**********************************************/
/*! exports provided: CollapseIdModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseIdModel", function() { return CollapseIdModel; });
class CollapseIdModel {
    constructor() {
        this.coll1 = false;
        this.coll2 = false;
        this.coll3 = false;
        this.coll4 = false;
        this.coll5 = false;
        this.coll6 = false;
    }
}


/***/ }),

/***/ "./src/app/_models/form.model.ts":
/*!***************************************!*\
  !*** ./src/app/_models/form.model.ts ***!
  \***************************************/
/*! exports provided: Formulario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formulario", function() { return Formulario; });
class Formulario {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '*/', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
    { path: 'principal', component: _principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"] },
    { path: 'contato', component: _contato_contato_component__WEBPACK_IMPORTED_MODULE_6__["ContatoComponent"] },
    { path: 'sobre', component: _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_7__["SobreComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'WebProject2020';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rodape/rodape.component */ "./src/app/rodape/rodape.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
            _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
            _rodape_rodape_component__WEBPACK_IMPORTED_MODULE_9__["RodapeComponent"],
            _contato_contato_component__WEBPACK_IMPORTED_MODULE_10__["ContatoComponent"],
            _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_11__["SobreComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_14__["MapComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contato/contato.component.css":
/*!***********************************************!*\
  !*** ./src/app/contato/contato.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhdG8vY29udGF0by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contato/contato.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contato/contato.component.ts ***!
  \**********************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_form_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_models/form.model */ "./src/app/_models/form.model.ts");



let ContatoComponent = class ContatoComponent {
    constructor() {
        this.object = new _models_form_model__WEBPACK_IMPORTED_MODULE_2__["Formulario"]();
        this.flagAlert = false;
        this.message = undefined;
        this.classeCss = undefined;
    }
    ngOnInit() {
    }
    limpaForm() {
        this.object = new _models_form_model__WEBPACK_IMPORTED_MODULE_2__["Formulario"]();
    }
    enviar() {
        if (this.validaForm()) {
            this.limpaForm();
            this.classeCss = "alert-success";
            this.message = "Mensagem enviada com sucesso";
            this.flagAlert = true;
        }
    }
    fechaAviso() {
        setTimeout(function () { }, 2000);
        this.flagAlert = false;
    }
    validaForm() {
        if (!this.object.nome) {
            this.flagAlert = true;
            this.classeCss = "alert-danger";
            this.message = "Nome Obrigatório!";
            return false;
        }
        else if (!this.object.email) {
            this.flagAlert = true;
            this.classeCss = "alert-danger";
            this.message = "E-mail Obrigatório!";
            return false;
        }
        else if (!this.object.comentario) {
            this.flagAlert = true;
            this.classeCss = "alert-danger";
            this.message = "Comentário Obrigatório!";
            return false;
        }
        return true;
    }
};
ContatoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contato',
        template: __webpack_require__(/*! raw-loader!./contato.component.html */ "./node_modules/raw-loader/index.js!./src/app/contato/contato.component.html"),
        styles: [__webpack_require__(/*! ./contato.component.css */ "./src/app/contato/contato.component.css")]
    })
], ContatoComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n\r\n.leaflet-tile::-moz-selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-drag {\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\r\n\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n\r\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n\r\n.leaflet-overlay-pane { z-index: 400; }\r\n\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n\r\n.leaflet-marker-pane  { z-index: 600; }\r\n\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\ttransition: opacity 0.2s linear;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\ttransition:         -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\ttransition:         transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\ttransition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:         grab;\r\n\t}\r\n\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n/* general typography */\r\n\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers.png');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers-2x.png');\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url('marker-icon.png');\r\n\t}\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n/* Tooltip */\r\n\r\n/* Base styles for the element that has a tooltip */\r\n\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n.map-container {\n    width: 1150px;\n    height: 500px;\n  }\r\n\r\n.map-frame {\n    border: 2px solid black;\n    height: 100%;\n  }\r\n\r\n#map {\n    height: 100%;\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9sZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MiLCJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7O0FBRXBCOzs7Ozs7Ozs7O0NBVUMsa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxNQUFNO0NBQ047O0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7OztDQUdDLHlCQUF5QjtJQUN0QixzQkFBc0I7U0FDakIscUJBQWlCO0tBQWpCLGlCQUFpQjtHQUN2Qix1QkFBdUI7Q0FDekI7O0FBQ0Qsa0RBQWtEOztBQUNsRDtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFGQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFDQSxtRkFBbUY7O0FBQ25GO0NBQ0MsMENBQTBDO0NBQzFDOztBQUNELHFFQUFxRTs7QUFDckU7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLDZCQUE2QjtDQUM3Qjs7QUFDRDs7Q0FFQyxjQUFjO0NBQ2Q7O0FBQ0QsZ0dBQWdHOztBQUNoRyxxRkFBcUY7O0FBQ3JGOzs7Ozs7Q0FNQywwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCOztBQUVEO0NBRUMseUJBQXlCO0NBQ3pCOztBQUNEO0NBRUMscURBQXFEO0NBQ3JELGtCQUFrQjtDQUNsQix3QkFBd0I7QUFDekI7O0FBQ0E7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyx3Q0FBd0M7QUFDekM7O0FBQ0E7Q0FDQyxvREFBb0Q7QUFDckQ7O0FBQ0E7Q0FDQyx1QkFBZTtTQUFmLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEI7O0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxRQUFRO0NBQ1IsU0FBUztDQUVKLHNCQUFzQjtDQUMzQixZQUFZO0NBQ1o7O0FBQ0QsdUVBQXVFOztBQUN2RTtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRCx3QkFBd0IsWUFBWSxFQUFFOztBQUV0Qyx3QkFBd0IsWUFBWSxFQUFFOztBQUN0Qyx3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c0JBQXNCO0NBQ3RCOztBQUdELFlBQVk7O0FBQ1osbURBQW1EOztBQUNuRDtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQzs7QUFDRDtDQUNDLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEI7O0FBQ0Q7Ozs7Q0FJQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsV0FBVztDQUNYOztBQUVELGVBQWU7O0FBRWY7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBOztDQUVDLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQyxTQUFTO0NBQ1Qsb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0Qjs7QUFDRDtDQUNDLE1BQU07Q0FDTixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTs7Q0FFQyxRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsUUFBUTtDQUNSLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkI7O0FBQ0Q7Q0FDQyxPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4Qjs7QUM1bkJEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7RUFDZjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiByZXF1aXJlZCBzdHlsZXMgKi9cclxuXHJcbi5sZWFmbGV0LXBhbmUsXHJcbi5sZWFmbGV0LXRpbGUsXHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93LFxyXG4ubGVhZmxldC10aWxlLWNvbnRhaW5lcixcclxuLmxlYWZsZXQtcGFuZSA+IHN2ZyxcclxuLmxlYWZsZXQtcGFuZSA+IGNhbnZhcyxcclxuLmxlYWZsZXQtem9vbS1ib3gsXHJcbi5sZWFmbGV0LWltYWdlLWxheWVyLFxyXG4ubGVhZmxldC1sYXllciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuLmxlYWZsZXQtdGlsZSxcclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3cge1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcblx0fVxyXG4vKiBQcmV2ZW50cyBJRTExIGZyb20gaGlnaGxpZ2h0aW5nIHRpbGVzIGluIGJsdWUgKi9cclxuLmxlYWZsZXQtdGlsZTo6c2VsZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4vKiBTYWZhcmkgcmVuZGVycyBub24tcmV0aW5hIHRpbGUgb24gcmV0aW5hIGJldHRlciB3aXRoIHRoaXMsIGJ1dCBDaHJvbWUgaXMgd29yc2UgKi9cclxuLmxlYWZsZXQtc2FmYXJpIC5sZWFmbGV0LXRpbGUge1xyXG5cdGltYWdlLXJlbmRlcmluZzogLXdlYmtpdC1vcHRpbWl6ZS1jb250cmFzdDtcclxuXHR9XHJcbi8qIGhhY2sgdGhhdCBwcmV2ZW50cyBodyBsYXllcnMgXCJzdHJldGNoaW5nXCIgd2hlbiBsb2FkaW5nIG5ldyB0aWxlcyAqL1xyXG4ubGVhZmxldC1zYWZhcmkgLmxlYWZsZXQtdGlsZS1jb250YWluZXIge1xyXG5cdHdpZHRoOiAxNjAwcHg7XHJcblx0aGVpZ2h0OiAxNjAwcHg7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0fVxyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4vKiAubGVhZmxldC1jb250YWluZXIgc3ZnOiByZXNldCBzdmcgbWF4LXdpZHRoIGRlY2xlcmF0aW9uIHNoaXBwZWQgaW4gSm9vbWxhISAoam9vbWxhLm9yZykgMy54ICovXHJcbi8qIC5sZWFmbGV0LWNvbnRhaW5lciBpbWc6IG1hcCBpcyBicm9rZW4gaW4gRkYgaWYgeW91IGhhdmUgbWF4LXdpZHRoOiAxMDAlIG9uIHRpbGVzICovXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1vdmVybGF5LXBhbmUgc3ZnLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtbWFya2VyLXBhbmUgaW1nLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtc2hhZG93LXBhbmUgaW1nLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtdGlsZS1wYW5lIGltZyxcclxuLmxlYWZsZXQtY29udGFpbmVyIGltZy5sZWFmbGV0LWltYWdlLWxheWVyLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtdGlsZSB7XHJcblx0bWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcblx0bWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LWNvbnRhaW5lci5sZWFmbGV0LXRvdWNoLXpvb20ge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IHBhbi14IHBhbi15O1xyXG5cdHRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIubGVhZmxldC10b3VjaC1kcmFnIHtcclxuXHQtbXMtdG91Y2gtYWN0aW9uOiBwaW5jaC16b29tO1xyXG5cdC8qIEZhbGxiYWNrIGZvciBGRiB3aGljaCBkb2Vzbid0IHN1cHBvcnQgcGluY2gtem9vbSAqL1xyXG5cdHRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHR0b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcbn1cclxuLmxlYWZsZXQtY29udGFpbmVyLmxlYWZsZXQtdG91Y2gtZHJhZy5sZWFmbGV0LXRvdWNoLXpvb20ge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XHJcblx0dG91Y2gtYWN0aW9uOiBub25lO1xyXG59XHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4ubGVhZmxldC1jb250YWluZXIgYSB7XHJcblx0LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDUxLCAxODEsIDIyOSwgMC40KTtcclxufVxyXG4ubGVhZmxldC10aWxlIHtcclxuXHRmaWx0ZXI6IGluaGVyaXQ7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdH1cclxuLmxlYWZsZXQtdGlsZS1sb2FkZWQge1xyXG5cdHZpc2liaWxpdHk6IGluaGVyaXQ7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWJveCB7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ei1pbmRleDogODAwO1xyXG5cdH1cclxuLyogd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODg4MzE5ICovXHJcbi5sZWFmbGV0LW92ZXJsYXktcGFuZSBzdmcge1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtcGFuZSAgICAgICAgIHsgei1pbmRleDogNDAwOyB9XHJcblxyXG4ubGVhZmxldC10aWxlLXBhbmUgICAgeyB6LWluZGV4OiAyMDA7IH1cclxuLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHsgei1pbmRleDogNDAwOyB9XHJcbi5sZWFmbGV0LXNoYWRvdy1wYW5lICB7IHotaW5kZXg6IDUwMDsgfVxyXG4ubGVhZmxldC1tYXJrZXItcGFuZSAgeyB6LWluZGV4OiA2MDA7IH1cclxuLmxlYWZsZXQtdG9vbHRpcC1wYW5lICAgeyB6LWluZGV4OiA2NTA7IH1cclxuLmxlYWZsZXQtcG9wdXAtcGFuZSAgIHsgei1pbmRleDogNzAwOyB9XHJcblxyXG4ubGVhZmxldC1tYXAtcGFuZSBjYW52YXMgeyB6LWluZGV4OiAxMDA7IH1cclxuLmxlYWZsZXQtbWFwLXBhbmUgc3ZnICAgIHsgei1pbmRleDogMjAwOyB9XHJcblxyXG4ubGVhZmxldC12bWwtc2hhcGUge1xyXG5cdHdpZHRoOiAxcHg7XHJcblx0aGVpZ2h0OiAxcHg7XHJcblx0fVxyXG4ubHZtbCB7XHJcblx0YmVoYXZpb3I6IHVybCgjZGVmYXVsdCNWTUwpO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0fVxyXG5cclxuXHJcbi8qIGNvbnRyb2wgcG9zaXRpb25pbmcgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiA4MDA7XHJcblx0cG9pbnRlci1ldmVudHM6IHZpc2libGVQYWludGVkOyAvKiBJRSA5LTEwIGRvZXNuJ3QgaGF2ZSBhdXRvICovXHJcblx0cG9pbnRlci1ldmVudHM6IGF1dG87XHJcblx0fVxyXG4ubGVhZmxldC10b3AsXHJcbi5sZWFmbGV0LWJvdHRvbSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC10b3Age1xyXG5cdHRvcDogMDtcclxuXHR9XHJcbi5sZWFmbGV0LXJpZ2h0IHtcclxuXHRyaWdodDogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSB7XHJcblx0Ym90dG9tOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCB7XHJcblx0bGVmdDogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGNsZWFyOiBib3RoO1xyXG5cdH1cclxuLmxlYWZsZXQtcmlnaHQgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdH1cclxuLmxlYWZsZXQtdG9wIC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0fVxyXG4ubGVhZmxldC1ib3R0b20gLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LWxlZnQgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0fVxyXG4ubGVhZmxldC1yaWdodCAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuXHJcbi8qIHpvb20gYW5kIGZhZGUgYW5pbWF0aW9ucyAqL1xyXG5cclxuLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LXRpbGUge1xyXG5cdHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xyXG5cdH1cclxuLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LXBvcHVwIHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdH1cclxuLmxlYWZsZXQtZmFkZS1hbmltIC5sZWFmbGV0LW1hcC1wYW5lIC5sZWFmbGV0LXBvcHVwIHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0ICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0ICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtem9vbS1hbmltYXRlZCB7XHJcblx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246ICAgIC1tb3otdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHQgICAgICAgIHRyYW5zaXRpb246ICAgICAgICAgdHJhbnNmb3JtIDAuMjVzIGN1YmljLWJlemllcigwLDAsMC4yNSwxKTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1wYW4tYW5pbSAubGVhZmxldC10aWxlIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XHJcblx0ICAgLW1vei10cmFuc2l0aW9uOiBub25lO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC16b29tLWFuaW0gLmxlYWZsZXQtem9vbS1oaWRlIHtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHJcbi8qIGN1cnNvcnMgKi9cclxuXHJcbi5sZWFmbGV0LWludGVyYWN0aXZlIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG4ubGVhZmxldC1ncmFiIHtcclxuXHRjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuXHRjdXJzb3I6ICAgIC1tb3otZ3JhYjtcclxuXHRjdXJzb3I6ICAgICAgICAgZ3JhYjtcclxuXHR9XHJcbi5sZWFmbGV0LWNyb3NzaGFpcixcclxuLmxlYWZsZXQtY3Jvc3NoYWlyIC5sZWFmbGV0LWludGVyYWN0aXZlIHtcclxuXHRjdXJzb3I6IGNyb3NzaGFpcjtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLXBhbmUsXHJcbi5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdGN1cnNvcjogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LWRyYWdnaW5nIC5sZWFmbGV0LWdyYWIsXHJcbi5sZWFmbGV0LWRyYWdnaW5nIC5sZWFmbGV0LWdyYWIgLmxlYWZsZXQtaW50ZXJhY3RpdmUsXHJcbi5sZWFmbGV0LWRyYWdnaW5nIC5sZWFmbGV0LW1hcmtlci1kcmFnZ2FibGUge1xyXG5cdGN1cnNvcjogbW92ZTtcclxuXHRjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XHJcblx0Y3Vyc29yOiAgICAtbW96LWdyYWJiaW5nO1xyXG5cdGN1cnNvcjogICAgICAgICBncmFiYmluZztcclxuXHR9XHJcblxyXG4vKiBtYXJrZXIgJiBvdmVybGF5cyBpbnRlcmFjdGl2aXR5ICovXHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93LFxyXG4ubGVhZmxldC1pbWFnZS1sYXllcixcclxuLmxlYWZsZXQtcGFuZSA+IHN2ZyBwYXRoLFxyXG4ubGVhZmxldC10aWxlLWNvbnRhaW5lciB7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtbWFya2VyLWljb24ubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtaW1hZ2UtbGF5ZXIubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtcGFuZSA+IHN2ZyBwYXRoLmxlYWZsZXQtaW50ZXJhY3RpdmUsXHJcbnN2Zy5sZWFmbGV0LWltYWdlLWxheWVyLmxlYWZsZXQtaW50ZXJhY3RpdmUgcGF0aCB7XHJcblx0cG9pbnRlci1ldmVudHM6IHZpc2libGVQYWludGVkOyAvKiBJRSA5LTEwIGRvZXNuJ3QgaGF2ZSBhdXRvICovXHJcblx0cG9pbnRlci1ldmVudHM6IGF1dG87XHJcblx0fVxyXG5cclxuLyogdmlzdWFsIHR3ZWFrcyAqL1xyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjZGRkO1xyXG5cdG91dGxpbmU6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgYSB7XHJcblx0Y29sb3I6ICMwMDc4QTg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgYS5sZWFmbGV0LWFjdGl2ZSB7XHJcblx0b3V0bGluZTogMnB4IHNvbGlkIG9yYW5nZTtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYm94IHtcclxuXHRib3JkZXI6IDJweCBkb3R0ZWQgIzM4ZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcblx0fVxyXG5cclxuXHJcbi8qIGdlbmVyYWwgdHlwb2dyYXBoeSAqL1xyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdGZvbnQ6IDEycHgvMS41IFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHR9XHJcblxyXG5cclxuLyogZ2VuZXJhbCB0b29sYmFyIHN0eWxlcyAqL1xyXG5cclxuLmxlYWZsZXQtYmFyIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwwLjY1KTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYSxcclxuLmxlYWZsZXQtYmFyIGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0d2lkdGg6IDI2cHg7XHJcblx0aGVpZ2h0OiAyNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGEsXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGE6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYTpmaXJzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYTpsYXN0LWNoaWxkIHtcclxuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtYmFyIGEubGVhZmxldC1kaXNhYmxlZCB7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcblx0Y29sb3I6ICNiYmI7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGEge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciBhOmZpcnN0LWNoaWxkIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciBhOmxhc3QtY2hpbGQge1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xyXG5cdH1cclxuXHJcbi8qIHpvb20gY29udHJvbCAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbC16b29tLWluLFxyXG4ubGVhZmxldC1jb250cm9sLXpvb20tb3V0IHtcclxuXHRmb250OiBib2xkIDE4cHggJ0x1Y2lkYSBDb25zb2xlJywgTW9uYWNvLCBtb25vc3BhY2U7XHJcblx0dGV4dC1pbmRlbnQ6IDFweDtcclxuXHR9XHJcblxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLXpvb20taW4sIC5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtem9vbS1vdXQgIHtcclxuXHRmb250LXNpemU6IDIycHg7XHJcblx0fVxyXG5cclxuXHJcbi8qIGxheWVycyBjb250cm9sICovXHJcblxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycyB7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwwLDAsMC40KTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9sYXllcnMucG5nKTtcclxuXHR3aWR0aDogMzZweDtcclxuXHRoZWlnaHQ6IDM2cHg7XHJcblx0fVxyXG4ubGVhZmxldC1yZXRpbmEgLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2xheWVycy0yeC5wbmcpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMjZweCAyNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHR3aWR0aDogNDRweDtcclxuXHRoZWlnaHQ6IDQ0cHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycyAubGVhZmxldC1jb250cm9sLWxheWVycy1saXN0LFxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1leHBhbmRlZCAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1leHBhbmRlZCAubGVhZmxldC1jb250cm9sLWxheWVycy1saXN0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1leHBhbmRlZCB7XHJcblx0cGFkZGluZzogNnB4IDEwcHggNnB4IDZweDtcclxuXHRjb2xvcjogIzMzMztcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtc2Nyb2xsYmFyIHtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXNlbGVjdG9yIHtcclxuXHRtYXJnaW4tdG9wOiAycHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogMXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMgbGFiZWwge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtc2VwYXJhdG9yIHtcclxuXHRoZWlnaHQ6IDA7XHJcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblx0bWFyZ2luOiA1cHggLTEwcHggNXB4IC02cHg7XHJcblx0fVxyXG5cclxuLyogRGVmYXVsdCBpY29uIFVSTHMgKi9cclxuLmxlYWZsZXQtZGVmYXVsdC1pY29uLXBhdGgge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbWFya2VyLWljb24ucG5nKTtcclxuXHR9XHJcblxyXG5cclxuLyogYXR0cmlidXRpb24gYW5kIHNjYWxlIGNvbnRyb2xzICovXHJcblxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcblx0bWFyZ2luOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbixcclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lIHtcclxuXHRwYWRkaW5nOiAwIDVweDtcclxuXHRjb2xvcjogIzMzMztcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24gYSB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uLFxyXG4ubGVhZmxldC1jb250YWluZXIgLmxlYWZsZXQtY29udHJvbC1zY2FsZSB7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCAubGVhZmxldC1jb250cm9sLXNjYWxlIHtcclxuXHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtYm90dG9tIC5sZWFmbGV0LWNvbnRyb2wtc2NhbGUge1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZSB7XHJcblx0Ym9yZGVyOiAycHggc29saWQgIzc3NztcclxuXHRib3JkZXItdG9wOiBub25lO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjE7XHJcblx0cGFkZGluZzogMnB4IDVweCAxcHg7XHJcblx0Zm9udC1zaXplOiAxMXB4O1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0ICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtc2NhbGUtbGluZTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkICM3Nzc7XHJcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHRtYXJnaW4tdG9wOiAtMnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzc3O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24sXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLFxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIge1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWxheWVycyxcclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcblx0YmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuXHR9XHJcblxyXG5cclxuLyogcG9wdXAgKi9cclxuXHJcbi5sZWFmbGV0LXBvcHVwIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIge1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHtcclxuXHRtYXJnaW46IDEzcHggMTlweDtcclxuXHRsaW5lLWhlaWdodDogMS40O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtY29udGVudCBwIHtcclxuXHRtYXJnaW46IDE4cHggMDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLXRpcC1jb250YWluZXIge1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHR3aWR0aDogMTdweDtcclxuXHRoZWlnaHQ6IDE3cHg7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cclxuXHRtYXJnaW46IC0xMHB4IGF1dG8gMDtcclxuXHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0ICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0ICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0ICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIsXHJcbi5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0Ym94LXNoYWRvdzogMCAzcHggMTRweCByZ2JhKDAsMCwwLDAuNCk7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIgYS5sZWFmbGV0LXBvcHVwLWNsb3NlLWJ1dHRvbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHRwYWRkaW5nOiA0cHggNHB4IDAgMDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxOHB4O1xyXG5cdGhlaWdodDogMTRweDtcclxuXHRmb250OiAxNnB4LzE0cHggVGFob21hLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG5cdGNvbG9yOiAjYzNjM2MzO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtcG9wdXAtY2xvc2UtYnV0dG9uOmhvdmVyIHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLXNjcm9sbGVkIHtcclxuXHRvdmVyZmxvdzogYXV0bztcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIge1xyXG5cdHpvb206IDE7XHJcblx0fVxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdHdpZHRoOiAyNHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cclxuXHQtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5NYXRyaXgoTTExPTAuNzA3MTA2NzgsIE0xMj0wLjcwNzEwNjc4LCBNMjE9LTAuNzA3MTA2NzgsIE0yMj0wLjcwNzEwNjc4KVwiO1xyXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9MC43MDcxMDY3OCwgTTEyPTAuNzA3MTA2NzgsIE0yMT0tMC43MDcxMDY3OCwgTTIyPTAuNzA3MTA2NzgpO1xyXG5cdH1cclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtdGlwLWNvbnRhaW5lciB7XHJcblx0bWFyZ2luLXRvcDogLTFweDtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1jb250cm9sLXpvb20sXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLFxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIsXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuXHR9XHJcblxyXG5cclxuLyogZGl2IGljb24gKi9cclxuXHJcbi5sZWFmbGV0LWRpdi1pY29uIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XHJcblx0fVxyXG5cclxuXHJcbi8qIFRvb2x0aXAgKi9cclxuLyogQmFzZSBzdHlsZXMgZm9yIHRoZSBlbGVtZW50IHRoYXQgaGFzIGEgdG9vbHRpcCAqL1xyXG4ubGVhZmxldC10b29sdGlwIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cGFkZGluZzogNnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0Y29sb3I6ICMyMjI7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuNCk7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLmxlYWZsZXQtY2xpY2thYmxlIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0cG9pbnRlci1ldmVudHM6IGF1dG87XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLXRvcDpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tOmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0OmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdH1cclxuXHJcbi8qIERpcmVjdGlvbnMgKi9cclxuXHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tIHtcclxuXHRtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC10b3Age1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b206YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLXRvcDpiZWZvcmUge1xyXG5cdGxlZnQ6IDUwJTtcclxuXHRtYXJnaW4tbGVmdDogLTZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSB7XHJcblx0Ym90dG9tOiAwO1xyXG5cdG1hcmdpbi1ib3R0b206IC0xMnB4O1xyXG5cdGJvcmRlci10b3AtY29sb3I6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbTpiZWZvcmUge1xyXG5cdHRvcDogMDtcclxuXHRtYXJnaW4tdG9wOiAtMTJweDtcclxuXHRtYXJnaW4tbGVmdDogLTZweDtcclxuXHRib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0IHtcclxuXHRtYXJnaW4tbGVmdDogLTZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0IHtcclxuXHRtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtbGVmdDpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQ6YmVmb3JlIHtcclxuXHR0b3A6IDUwJTtcclxuXHRtYXJnaW4tdG9wOiAtNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0OmJlZm9yZSB7XHJcblx0cmlnaHQ6IDA7XHJcblx0bWFyZ2luLXJpZ2h0OiAtMTJweDtcclxuXHRib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQ6YmVmb3JlIHtcclxuXHRsZWZ0OiAwO1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTJweDtcclxuXHRib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG4iLCJcbkBpbXBvcnQgXCJ+bGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5cbi5tYXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTE1MHB4O1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgXG4gIC5tYXAtZnJhbWUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgI21hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_files_campinasData_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/files/campinasData.json */ "./src/assets/files/campinasData.json");
var _assets_files_campinasData_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/files/campinasData.json */ "./src/assets/files/campinasData.json", 1);
/* harmony import */ var _assets_files_dataObject_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../assets/files/dataObject.json */ "./src/assets/files/dataObject.json");
var _assets_files_dataObject_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/files/dataObject.json */ "./src/assets/files/dataObject.json", 1);





let MapComponent = class MapComponent {
    constructor() {
        this.campinasData = _assets_files_campinasData_json__WEBPACK_IMPORTED_MODULE_3__;
        this.arrayCityes = _assets_files_dataObject_json__WEBPACK_IMPORTED_MODULE_4__;
    }
    ngOnInit() {
        this.initSouthAmerica();
        //this.initCampinas()
    }
    initSouthAmerica() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map', {
            center: [-22.9064, -47.0616],
            zoom: 3
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 10,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    }
    initCampinas() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map').setView([-22.6970, -47.155], 9);
        leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxib3JkaWdub24iLCJhIjoiY2l0MzFlZXdzMHRyNjJvcGdnY2txZXdsMCJ9.IOAXYE1_mrHHHUbVMxR59Q', {
            maxZoom: 30,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(this.map);
    }
    desenhaCampinas() {
        var myStyle = {
            "color": "#ff7800",
            "weight": 1,
            "opacity": 0.15
        };
        leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](this.campinasData, {
            style: myStyle
        }).addTo(this.map);
    }
    // CARREGA CIDADES DA REGIAO
    adicionaMarcador() {
        for (var i = 0; i < this.arrayCityes.infoCidades.length; i++) {
            this.arrayCityes.infoCidades[i].resp =
                leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([this.arrayCityes.infoCidades[i].la, this.arrayCityes.infoCidades[i].lo]).addTo(this.map);
        }
    }
    adicionaProduto() {
        let scooter = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'data:image/jpeg;base64,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',
            shadowUrl: 'data:image/jpeg;base64,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',
            iconSize: [30, 26],
            shadowSize: [0, 0] // size of the shadow                
        });
        let p1 = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([-22.8730, -47.0580], { icon: scooter }).addTo(this.map);
        let p2 = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([-22.8741, -47.0431], { icon: scooter }).addTo(this.map);
        let p3 = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([-22.8709, -47.0479], { icon: scooter }).addTo(this.map);
        let p4 = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([-22.8705, -47.0479], { icon: scooter }).addTo(this.map);
    }
};
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/principal/principal.component.css":
/*!***************************************************!*\
  !*** ./src/app/principal/principal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/principal/principal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/principal/principal.component.ts ***!
  \**************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _assets_files_dataObject_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/files/dataObject.json */ "./src/assets/files/dataObject.json");
var _assets_files_dataObject_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/files/dataObject.json */ "./src/assets/files/dataObject.json", 1);



let PrincipalComponent = class PrincipalComponent {
    constructor() { this.arrayCidades = _assets_files_dataObject_json__WEBPACK_IMPORTED_MODULE_2__; }
    ngOnInit() {
    }
};
PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: __webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/index.js!./src/app/principal/principal.component.html"),
        styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/principal/principal.component.css")]
    })
], PrincipalComponent);



/***/ }),

/***/ "./src/app/rodape/rodape.component.css":
/*!*********************************************!*\
  !*** ./src/app/rodape/rodape.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lateralEsquerda{\n    margin-left: 38%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9kYXBlL3JvZGFwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9kYXBlL3JvZGFwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhdGVyYWxFc3F1ZXJkYXtcbiAgICBtYXJnaW4tbGVmdDogMzglO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/rodape/rodape.component.ts":
/*!********************************************!*\
  !*** ./src/app/rodape/rodape.component.ts ***!
  \********************************************/
/*! exports provided: RodapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodapeComponent", function() { return RodapeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RodapeComponent = class RodapeComponent {
    constructor() {
        this.textoRodape = "Copyright © 2020 Rewth. Todos os direitos reservados.";
    }
    ngOnInit() {
    }
};
RodapeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rodape',
        template: __webpack_require__(/*! raw-loader!./rodape.component.html */ "./node_modules/raw-loader/index.js!./src/app/rodape/rodape.component.html"),
        styles: [__webpack_require__(/*! ./rodape.component.css */ "./src/app/rodape/rodape.component.css")]
    })
], RodapeComponent);



/***/ }),

/***/ "./src/app/sobre/sobre.component.css":
/*!*******************************************!*\
  !*** ./src/app/sobre/sobre.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".espEsq{\n    margin-left: 2%;\n}\n\n.rColor{\n    color: red;\n}\n\n.serif {\n    font-family: Snell Roundhand, cursive;\n    font-size: 1.5em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29icmUvc29icmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc29icmUvc29icmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lc3BFc3F7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uckNvbG9ye1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5zZXJpZiB7XG4gICAgZm9udC1mYW1pbHk6IFNuZWxsIFJvdW5kaGFuZCwgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/*!******************************************!*\
  !*** ./src/app/sobre/sobre.component.ts ***!
  \******************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_collapse_id_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_models/collapse-id.model */ "./src/app/_models/collapse-id.model.ts");



let SobreComponent = class SobreComponent {
    constructor() {
        this.flag = new _models_collapse_id_model__WEBPACK_IMPORTED_MODULE_2__["CollapseIdModel"]();
    }
    ngOnInit() {
    }
    openCloseCollapse(key) {
        switch (key) {
            case "collapse1":
                this.flag.coll1 = !this.flag.coll1;
                break;
            case "collapse2":
                this.flag.coll2 = !this.flag.coll2;
                break;
            case "collapse3":
                this.flag.coll3 = !this.flag.coll3;
                break;
            case "collapse4":
                this.flag.coll4 = !this.flag.coll4;
                break;
            case "collapse5":
                this.flag.coll5 = !this.flag.coll5;
                break;
            default:
                this.flag.coll6 = !this.flag.coll6;
                break;
        }
    }
};
SobreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sobre',
        template: __webpack_require__(/*! raw-loader!./sobre.component.html */ "./node_modules/raw-loader/index.js!./src/app/sobre/sobre.component.html"),
        styles: [__webpack_require__(/*! ./sobre.component.css */ "./src/app/sobre/sobre.component.css")]
    })
], SobreComponent);



/***/ }),

/***/ "./src/assets/files/campinasData.json":
/*!********************************************!*\
  !*** ./src/assets/files/campinasData.json ***!
  \********************************************/
/*! exports provided: type, coordinates, default */
/***/ (function(module) {

module.exports = {"type":"Polygon","coordinates":[[[-46.93821,-22.743293],[-46.90565,-22.76447],[-46.9012,-22.7666],[-46.90287,-22.770984],[-46.89859,-22.7782],[-46.904361,-22.78393],[-46.892785,-22.79751],[-46.89501,-22.807086],[-46.88788,-22.819256],[-46.87957,-22.82157],[-46.87634,-22.81795],[-46.867705,-22.81764],[-46.86684,-22.82669],[-46.862372,-22.82453],[-46.85826,-22.83726],[-46.85939,-22.84948],[-46.855095,-22.860251],[-46.85098,-22.8608],[-46.850621,-22.87617],[-46.836707,-22.88005],[-46.83053,-22.873865],[-46.82621,-22.8738],[-46.81573,-22.885135],[-46.81709,-22.89664],[-46.81852,-22.89941],[-46.83154,-22.90675],[-46.85192,-22.902019],[-46.85931,-22.90524],[-46.862958,-22.89944],[-46.87036,-22.89968],[-46.872783,-22.90407],[-46.88807,-22.90734],[-46.89329,-22.914891],[-46.88348,-22.92544],[-46.87836,-22.92673],[-46.877556,-22.931376],[-46.89471,-22.933968],[-46.89837,-22.9322],[-46.899041,-22.92574],[-46.90331,-22.92844],[-46.90601,-22.92542],[-46.91451,-22.92411],[-46.92246,-22.9308],[-46.92987,-22.92835],[-46.93567,-22.930765],[-46.93953,-22.92786],[-46.9514,-22.9092],[-46.95594,-22.91066],[-46.95869,-22.91076],[-46.96128,-22.91157],[-46.966816,-22.906092],[-46.97532,-22.90419],[-46.98198,-22.904542],[-46.98976,-22.91228],[-46.9892,-22.921938],[-46.99285,-22.929216],[-46.99925,-22.93478],[-47.01253,-22.9414],[-47.01987,-22.95024],[-47.026181,-22.95254],[-47.02338,-22.957306],[-47.03387,-22.974988],[-47.04489,-22.980863],[-47.05294,-22.98579],[-47.06657,-22.99633],[-47.070674,-23.00877],[-47.07476,-23.012896],[-47.073315,-23.01704],[-47.07042,-23.02707],[-47.06265,-23.02748],[-47.06048,-23.034268],[-47.0534,-23.03874],[-47.04968,-23.05069],[-47.07095,-23.049663],[-47.07672,-23.053114],[-47.08532,-23.05576],[-47.08938,-23.05594],[-47.09506,-23.052572],[-47.10369,-23.05656],[-47.10852,-23.06105],[-47.11658,-23.057116],[-47.12143,-23.05733],[-47.12503,-23.06006],[-47.12697,-23.05602],[-47.13217,-23.05401],[-47.14362,-23.05785],[-47.15142,-23.05039],[-47.15115,-23.03968],[-47.156128,-23.041655],[-47.158263,-23.03811],[-47.16782,-23.03182],[-47.20079,-23.033049],[-47.20724,-23.02735],[-47.232846,-23.006916],[-47.21979,-22.99933],[-47.204186,-22.99846],[-47.20606,-22.993241],[-47.20145,-22.98546],[-47.207402,-22.970951],[-47.209446,-22.969285],[-47.21733,-22.96446],[-47.2211,-22.96201],[-47.22835,-22.952962],[-47.21675,-22.95094],[-47.21191,-22.951207],[-47.20335,-22.94162],[-47.202356,-22.93168],[-47.20321,-22.92699],[-47.23721,-22.922],[-47.2452,-22.9106],[-47.22313,-22.9041],[-47.21604,-22.91302],[-47.19329,-22.91065],[-47.18051,-22.91292],[-47.16826,-22.90067],[-47.15765,-22.88761],[-47.16107,-22.877466],[-47.15677,-22.86568],[-47.15885,-22.85768],[-47.190989,-22.85598],[-47.158532,-22.8574],[-47.162712,-22.85256],[-47.15454,-22.83431],[-47.1587,-22.82035],[-47.162459,-22.80433],[-47.15315,-22.80952],[-47.12843,-22.80776],[-47.12957,-22.81095],[-47.12207,-22.81327],[-47.12035,-22.81039],[-47.11104,-22.816127],[-47.10955,-22.79966],[-47.10399,-22.796921],[-47.09465,-22.77548],[-47.09644,-22.77005],[-47.10496,-22.76422],[-47.10821,-22.75382],[-47.101898,-22.75038],[-47.100907,-22.74983],[-47.0909,-22.74922],[-47.08462,-22.74328],[-47.07757,-22.74263],[-47.07623,-22.7328],[-47.071788,-22.73135],[-47.04865,-22.739532],[-47.02892,-22.73253],[-47.02312,-22.734783],[-47.01802,-22.737],[-47.011788,-22.73409],[-47.00276,-22.73985],[-46.998567,-22.73788],[-46.989899,-22.744913],[-46.97405,-22.74432],[-46.9672,-22.74321],[-46.964699,-22.735318],[-46.95678,-22.72918],[-46.93821,-22.743293]]]};

/***/ }),

/***/ "./src/assets/files/dataObject.json":
/*!******************************************!*\
  !*** ./src/assets/files/dataObject.json ***!
  \******************************************/
/*! exports provided: infoCidades, default */
/***/ (function(module) {

module.exports = {"infoCidades":[{"la":-22.8216,"lo":-47.2664,"cidade":"Sumaré","resp":null},{"la":-22.8577,"lo":-47.2203,"cidade":"Hortolândia","resp":null},{"la":-22.7388,"lo":-47.3319,"cidade":"Americana","resp":null},{"la":-23.0301,"lo":-46.9756,"cidade":"Vinhedo","resp":null},{"la":-22.9712,"lo":-46.9964,"cidade":"Valinhos","resp":null},{"la":-22.7617,"lo":-47.1541,"cidade":"Paulinia","resp":null},{"la":-22.6333,"lo":-47.0564,"cidade":"Holambra","resp":null},{"la":-22.7058,"lo":-46.9862,"cidade":"Jaguariúna","resp":null},{"la":-22.7547,"lo":-47.4144,"cidade":"Santa Barbara d'Oeste","resp":null},{"la":-22.7419,"lo":-46.9017,"cidade":"Pedreira","resp":null},{"la":-22.6066,"lo":-46.9193,"cidade":"Santo Antônio de Posse","resp":null},{"la":-23.0882,"lo":-47.2234,"cidade":"Indaiatuba","resp":null},{"la":-22.9472,"lo":-47.3168,"cidade":"Monte Mor","resp":null},{"la":-22.5735,"lo":-47.1733,"cidade":"Artur Nogueira","resp":null},{"la":-22.7799,"lo":-47.2963,"cidade":"Nova Odessa","resp":null},{"la":-22.6462,"lo":-47.1967,"cidade":"Cosmópolis","resp":null},{"la":-23.0068,"lo":-46.8387,"cidade":"Itatiba","resp":null},{"la":-22.8804,"lo":-46.7923,"cidade":"Morungaba","resp":null},{"la":-22.4882,"lo":-47.2158,"cidade":"Engenheiro Coelho","resp":null}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rewth/Área de Trabalho/IFSP - 2020/desenvWeb_2020/projetoSemestral/webProject2020/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map