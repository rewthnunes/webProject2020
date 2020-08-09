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

module.exports = "\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n\n<div class=\"container-fluid\" style=\"text-align:center;\"><br>\n    <div class=\"container-fluid\">     \n        <div class=\"row\">\n        <div class=\"col-sm\">\n            <div class=\"container\">\n                <h3>Fale Conosco</h3>\n                <p> Deixe um comentário, sugestão, elogio ou crítica. Em breve entraremos em contato com você! </p>\n                <form class=\"form-inline\">\n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-2\"><b for=\"nome\">Nome:</b></div>\n                        <div class=\"form-group col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome\" name=\"nome\" \n                            [(ngModel)]=\"object.nome\" [ngModelOptions]=\"{standalone: true}\" style=\"width: 100%\">\n                        </div>                       \n                    </div>       \n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-2\"><b for=\"email\">Email:</b></div>\n                        <div class=\"form-group col-sm-10\">\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\" \n                            style=\"width: 100%\" [(ngModel)]=\"object.email\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>                       \n                    </div>                          \n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-2\"><b for=\"comentario\">Comentário:</b></div>\n                        <div class=\"form-group col-sm-10\">\n                            <textarea class=\"form-control\" id=\"comentario\" rows=\"3\" placeholder=\"Comentário\"\n                            [(ngModel)]=\"object.comentario\" [ngModelOptions]=\"{standalone: true}\" style=\"width: 100%\"></textarea>\n                        </div>                       \n                    </div>    \n                    <div class=\"form-group col-sm-12\" style=\"margin-bottom: 10px;\">\n                        <div class=\"form-group col-sm-8\"></div>\n                        <div class=\"form-group col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"limpaForm()\">Limpar</button>\n                        </div>    \n                        <div class=\"form-group col-sm-2\">\n                            <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"enviar()\">Enviar</button>\n                        </div>                                          \n                    </div>                       \n                </form>\n            </div> <br>                                           \n        </div>\n        <!-- IMAGEM DIREITA -->\n        <div class=\"col-sm\">\n            <div><br>\n                <img width=\"300\" alt=\"Angular Logo\" src=\"./../assets/images/0_n3DRTlqqLO7oXyuv.png\">\n            </div>                   \n        </div>\n        </div>\n    </div>  \n    </div>\n\n\n    \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n<div class=\"container-fluid\" style=\"text-align:center;\">\n    <h2>20201.5.CMP24100.1N.SUP.02594 (DWEL5) 254494 DESENVOLVIMENTO WEB</h2>\n    <div class=\"container-fluid\">     \n        <div class=\"row\">\n        <div class=\"col-sm bg-success\">\n            <div>\n                <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n            </div>\n        </div>\n        <div class=\"col-sm bg-warning\">\n            <div><br>\n                <img width=\"300\" alt=\"Angular Logo\" src=\"./../assets/images/1200px-Instituto_Federal_de_São_Paulo_-_Marca_Vertical_2015.svg.png\">\n            </div>            \n        </div>\n        <div class=\"col-sm bg-success\">\n            <div><br>\n                <img width=\"300\" alt=\"Angular Logo\" src=\"./../assets/images/0_n3DRTlqqLO7oXyuv.png\">\n            </div>                   \n        </div>\n        </div>\n    </div>  \n</div>"

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

module.exports = "\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n\n<div class=\"container-fluid\" style=\"text-align:center;\">\n        <h2>Erro!</h2>\n        <div class=\"container-fluid\">     \n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <div><br>\n                        <img width=\"300\" alt=\"Angular Logo\" src=\"./../../assets/drawing-clip-art-not-found-thumbnail.jpg\">\n                    </div>                   \n            </div>\n        </div>  \n</div>\n\n\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/principal/principal.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/principal/principal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n\n<div class=\"container-fluid\" style=\"text-align:center;\">\n        <h2>Formulário</h2>\n        <div class=\"container-fluid\">     \n            <div class=\"row\">\n                <div class=\"col-sm\">\n                    <div><br>\n                        <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n                    </div>                   \n                </div>\n            <div class=\"col-sm\">\n                <div class=\"container\">\n                    <h3>Dados Pessoais</h3>\n                    <p>Make the viewport larger than 768px wide to see that all of the form elements are inline, left aligned, and the labels are alongside.</p>\n                    <form class=\"form-inline\" action=\"/action_page.php\">\n                        <div class=\"form-group espBaixo\">\n                            <b for=\"nome\">Nome:</b>\n                            <input type=\"nome\" class=\"form-control\" id=\"nome\" placeholder=\"Entre com o nome\" name=\"nome\">\n                        </div>                        \n                        <div class=\"form-group espBaixo\">\n                            <b for=\"email\">Email:</b>\n                            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Entre com o email\" name=\"email\">\n                        </div>\n                        <div class=\"form-group espBaixo\">\n                            <b for=\"tel\">Telefone:</b>\n                            <input type=\"text\" class=\"form-control\" id=\"tel\" placeholder=\"Entre com o telefone\" name=\"tel\">\n                        </div>\n                    </form>\n                </div>                                   \n            </div>\n            <div class=\"col-sm\">\n                    <h5>Botões</h5>\n                    <div class=\"container\">\n                            <h2>Button Outline</h2>\n                            <button type=\"button\" class=\"btn btn-outline-primary\">Primary</button>\n                            <button type=\"button\" class=\"btn btn-outline-secondary\">Secondary</button>\n                            <button type=\"button\" class=\"btn btn-outline-success\">Success</button>\n                            <button type=\"button\" class=\"btn btn-outline-info\">Info</button>\n                            <button type=\"button\" class=\"btn btn-outline-warning\">Warning</button>\n                            <button type=\"button\" class=\"btn btn-outline-danger\">Danger</button>\n                            <button type=\"button\" class=\"btn btn-outline-dark\">Dark</button>\n                            <button type=\"button\" class=\"btn btn-outline-light text-dark\">Light</button>\n                          </div>\n                </div>\n            </div>\n        </div>  \n    </div>\n\n\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rodape/rodape.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rodape/rodape.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"margin-bottom: 5px;\">\n    <br>\n    <hr>\n    <br>\n    <nav class=\"navbar navbar-expand-sm bg-secondary navbar-dark\">\n        <ul class=\"navbar-nav lateralEsquerda\">\n            <li class=\"nav-item\">\n            <a class=\"nav-link\">Copyright since 2020</a>\n            </li>\n        </ul>\n    </nav>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sobre/sobre.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sobre/sobre.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\">\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\"></script>\n\n<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n          <h2>Projeto Final - Desenvolvimento WEB 2020</h2>\n          <p><strong>Nota:</strong> O grupo deverá desenvolver um site que exiba pontos geográficos de acordo com um tema escolhido. Imagine um Google Maps com itens específicos exibidos no mapa como por exemplo praças de Campinas. </p>\n          <div class=\"panel-group\" id=\"accordion\">\n  \n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                  <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse1')\">\n                    1. Descrição do projeto</a>\n                </h4>\n              </div>\n              <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll1\">\n                <div class=\"panel-body\">\n                  <ul>\n                    <li>\n                      O grupo deverá desenvolver um site que exiba pontos geográficos de acordo com um tema escolhido. \n                      Imagine um Google Maps com itens específicos exibidos no mapa como por exemplo praças de Campinas.\n                    </li>\n                  </ul>                \n                </div>\n                <div style=\"text-align: center; margin-bottom: 10px;\">\n                  <img width=\"300\" alt=\"Angular Logo\" src=\"./../../assets/images/Captura de tela em 2020-08-06 23-05-42.png\">\n                </div>              \n              </div>\n            </div>\n  \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse2')\">\n                        2. Regras</a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll2\">\n                  <div class=\"panel-body\">\n                    <ul>\n                      <li>\n                        O projeto pode ser feito em duplas ou individual.\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n            </div>\n              \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse3')\">\n                      3. Conteúdo do site e requisitos gerais</a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll3\">\n                  <div class=\"panel-body\">\n                    <p class=\"espEsq\"> a) &nbsp;&nbsp; Os dados de cada ponto devem ser lidos de arquivo Json ou XML.\n                    <p class=\"espEsq\"> b) &nbsp;&nbsp; Cada ponto deve ter, além da sua localização geográfica, no mínimo 3 informações sobre o local. Por exemplo se for uma praça deve conter o nome da praça, inauguração e tamanho. Endereço é obrigatório.\n                    <p class=\"espEsq\"> c) &nbsp;&nbsp; O arquivo de dados deve conter no mínimo 10 itens. Exemplo: Se forem praças devem conter pelo menos 10 praças.\n                    <p class=\"espEsq\"> d) &nbsp;&nbsp; Quando o usuário apontar para algum elemento do mapa uma janela com informações sobre o local devem ser exibidas.\n                    <p class=\"espEsq\"> e) &nbsp;&nbsp; Cada vez que a página for carregada trazer itens em destaque na página principal (fotos). Se forem praças trazer as 3 praças aleatórias em destaque.         \n                    <p class=\"espEsq\"> f) &nbsp;&nbsp; Busca: Deve ser possível consultar os itens por endereço (rua, bairro, cidade).\n                    <p class=\"espEsq\"> g) &nbsp;&nbsp; Deve ser possível marcar alguns itens como como favoritos. Esta marcação deve ficar armazenada no navegador.\n                    <p class=\"espEsq\"> h) &nbsp;&nbsp; Crie um cabeçalho para navegação no site.\n                    <p class=\"espEsq\"> i) &nbsp;&nbsp; Crie uma sessão Fale Conosco onde o usuário pode falar com os responsáveis pelo site. Essa página deve conter um formulário como nome, e-mail do usuário e uma área para ele digitar o comentário.\n                    <p class=\"espEsq\"> j) &nbsp;&nbsp; Um rodapé com o tipo de licenciamento do site.\n                    <p class=\"espEsq\"> k) &nbsp;&nbsp; Uma sessão com informações sobre o projeto e os autores.\n                    <p class=\"espEsq\"> l) &nbsp;&nbsp; O site deve estar armazenado em algum provedor de hospedagem. Considerem utilizar o firebase que é gratuito.  \n                  </div>\n                </div>\n            </div>\n                \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse4')\">\n                      4. Temas</a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll4\">\n                  <div class=\"panel-body\">\n                    <ul>\n                      <li>\n                        Tema 1: Cadastrar em um mapa os pontos culturais da cidade de Campinas.\n                      </li>\n                      <li>\n                        Tema 2: Cadastrar em um mapa todos os locais de atendimento de saúde de Campinas.\n                      </li>\n                      <li>\n                        Tema 3: Cadastrar em um mapa todas as escolas do município de Campinas.\n                      </li>\n                      <li>\n                        Tema 4: Cadastrar em um mapa praças ou centros esportivos públicos.\n                      </li>\n                      <li>\n                        Tema 5: Cadastrar em um mapa as baladas ou bares de Campinas.\n                      </li>\n                      <li>\n                        Tema 6: Cadastrar em um mapa os locais de serviços públicos de Campinas (prefeitura, câmara, inss, etc)\n                      </li>\n                      <li>\n                        Tema 7: Cadastrar em um mapa pontos que lembram a cultura negra em Campinas.\n                      </li>\n                      <li>\n                        Tema 8: Outro (Pergunte para o professor se sua ideia pode ser implementada.\n                      </li>         \n                    </ul>\n                  </div>\n                </div>\n            </div>\n                  \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse5')\">\n                      5. Data da entrega </a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll5\">\n                  <div class=\"panel-body\">\n                    <ul>\n                      <li>\n                        09/09/2020: requisitos de A até E.   \n                      </li>\n                      <li>         \n                        30/09/2020: todos os requisitos.\n                      </li>                \n                    </ul>\n                  </div>\n                </div>\n            </div>\n                    \n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"panel-title\">\n                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" style=\"cursor:pointer;\" (click)=\"openCloseCollapse('collapse6')\">\n                      6. Avaliação</a>\n                  </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\" *ngIf=\"flag.coll6\">\n                  <div class=\"panel-body\">\n                    <p class=\"espEsq\">  Critérios de Avaliação &nbsp; / &nbsp; Peso:                        \n                    <p class=\"espEsq\"> a) &nbsp;&nbsp; Organização  &nbsp; <b><i class=\"rColor\">10%</i></b>                  \n                    <p class=\"espEsq\"> b) &nbsp;&nbsp; HTML         &nbsp; <b><i class=\"rColor\">20%</i></b>                  \n                    <p class=\"espEsq\"> c) &nbsp;&nbsp; CSS          &nbsp; <b><i class=\"rColor\">20%</i></b>                  \n                    <p class=\"espEsq\"> d) &nbsp;&nbsp; Javascript   &nbsp; <b><i class=\"rColor\">30%</i></b>                \n                    <p class=\"espEsq\"> e) &nbsp;&nbsp; Hospedagem   &nbsp; <b><i class=\"rColor\">10%</i></b>                   \n                    <p class=\"espEsq\"> f) &nbsp;&nbsp; Apresentação &nbsp; <b><i class=\"rColor\">10%</i></b>    \n                  </div>\n                </div>\n            </div>              \n  \n          </div> \n      </div>\n      <!-- IMAGEM DIREITA -->\n      <div class=\"col-sm-4\" style=\"margin-top:8%;\">\n          <div style=\"margin-left: 10px\"><br>\n              <img width=\"300\" alt=\"Angular Logo\" src=\"./../assets/images/1200px-Instituto_Federal_de_São_Paulo_-_Marca_Vertical_2015.svg.png\">\n          </div>                   \n      </div>    \n    </div>\n  </div>\n\n\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js\"></script>\n\n"

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
    { path: '', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] },
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














// import {ButtonModule} from 'primeng/button';
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
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_12__["InputTextareaModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            // ButtonModule
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
    }
    ngOnInit() {
    }
    limpaForm() {
        this.object = new _models_form_model__WEBPACK_IMPORTED_MODULE_2__["Formulario"]();
    }
    enviar() {
        if (this.validaForm()) {
            alert("Comentário enviado com sucesso!");
            this.limpaForm();
        }
    }
    validaForm() {
        if (!this.object.nome) {
            alert("Nome Obrigatório!");
            return false;
        }
        else if (!this.object.email) {
            alert("E-mail Obrigatório!");
            return false;
        }
        else if (!this.object.comentario) {
            alert("Comentário Obrigatório!");
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


let PrincipalComponent = class PrincipalComponent {
    constructor() { }
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

module.exports = ".lateralEsquerda{\n    margin-left: 44%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9kYXBlL3JvZGFwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm9kYXBlL3JvZGFwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhdGVyYWxFc3F1ZXJkYXtcbiAgICBtYXJnaW4tbGVmdDogNDQlO1xufVxuXG4iXX0= */"

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
    constructor() { }
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

module.exports = ".espEsq{\n    margin-left: 2%;\n}\n\n.rColor{\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29icmUvc29icmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zb2JyZS9zb2JyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzcEVzcXtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5yQ29sb3J7XG4gICAgY29sb3I6IHJlZDtcbn0iXX0= */"

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