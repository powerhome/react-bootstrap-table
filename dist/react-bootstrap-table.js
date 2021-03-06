(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTable"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SizePerPageDropDown = exports.ButtonGroup = exports.SearchField = exports.ClearSearchButton = exports.ExportCSVButton = exports.ShowSelectedOnlyButton = exports.DeleteButton = exports.InsertButton = exports.InsertModalFooter = exports.InsertModalBody = exports.InsertModalHeader = exports.TableHeaderColumn = exports.BootstrapTable = undefined;

	var _BootstrapTable = __webpack_require__(1);

	var _BootstrapTable2 = _interopRequireDefault(_BootstrapTable);

	var _TableHeaderColumn = __webpack_require__(233);

	var _TableHeaderColumn2 = _interopRequireDefault(_TableHeaderColumn);

	var _InsertModalHeader = __webpack_require__(216);

	var _InsertModalHeader2 = _interopRequireDefault(_InsertModalHeader);

	var _InsertModalBody = __webpack_require__(218);

	var _InsertModalBody2 = _interopRequireDefault(_InsertModalBody);

	var _InsertModalFooter = __webpack_require__(217);

	var _InsertModalFooter2 = _interopRequireDefault(_InsertModalFooter);

	var _InsertButton = __webpack_require__(219);

	var _InsertButton2 = _interopRequireDefault(_InsertButton);

	var _DeleteButton = __webpack_require__(220);

	var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

	var _ExportCSVButton = __webpack_require__(221);

	var _ExportCSVButton2 = _interopRequireDefault(_ExportCSVButton);

	var _ShowSelectedOnlyButton = __webpack_require__(222);

	var _ShowSelectedOnlyButton2 = _interopRequireDefault(_ShowSelectedOnlyButton);

	var _ClearSearchButton = __webpack_require__(224);

	var _ClearSearchButton2 = _interopRequireDefault(_ClearSearchButton);

	var _SearchField = __webpack_require__(223);

	var _SearchField2 = _interopRequireDefault(_SearchField);

	var _ButtonGroup = __webpack_require__(239);

	var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

	var _SizePerPageDropDown = __webpack_require__(197);

	var _SizePerPageDropDown2 = _interopRequireDefault(_SizePerPageDropDown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (typeof window !== 'undefined') {
	  window.BootstrapTable = _BootstrapTable2.default;
	  window.TableHeaderColumn = _TableHeaderColumn2.default;
	  window.InsertModalHeader = _InsertModalHeader2.default;
	  window.InsertModalBody = _InsertModalBody2.default;
	  window.InsertModalFooter = _InsertModalFooter2.default;
	  window.InsertButton = _InsertButton2.default;
	  window.DeleteButton = _DeleteButton2.default;
	  window.ShowSelectedOnlyButton = _ShowSelectedOnlyButton2.default;
	  window.ExportCSVButton = _ExportCSVButton2.default;
	  window.ClearSearchButton = _ClearSearchButton2.default;
	  window.SearchField = _SearchField2.default;
	  window.ButtonGroup = _ButtonGroup2.default;
	  window.SizePerPageDropDown = _SizePerPageDropDown2.default;
	}
	exports.BootstrapTable = _BootstrapTable2.default;
	exports.TableHeaderColumn = _TableHeaderColumn2.default;
	exports.InsertModalHeader = _InsertModalHeader2.default;
	exports.InsertModalBody = _InsertModalBody2.default;
	exports.InsertModalFooter = _InsertModalFooter2.default;
	exports.InsertButton = _InsertButton2.default;
	exports.DeleteButton = _DeleteButton2.default;
	exports.ShowSelectedOnlyButton = _ShowSelectedOnlyButton2.default;
	exports.ExportCSVButton = _ExportCSVButton2.default;
	exports.ClearSearchButton = _ClearSearchButton2.default;
	exports.SearchField = _SearchField2.default;
	exports.ButtonGroup = _ButtonGroup2.default;
	exports.SizePerPageDropDown = _SizePerPageDropDown2.default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _TableHeader = __webpack_require__(5);

	var _TableHeader2 = _interopRequireDefault(_TableHeader);

	var _TableBody = __webpack_require__(8);

	var _TableBody2 = _interopRequireDefault(_TableBody);

	var _PaginationList = __webpack_require__(195);

	var _PaginationList2 = _interopRequireDefault(_PaginationList);

	var _ToolBar = __webpack_require__(198);

	var _ToolBar2 = _interopRequireDefault(_ToolBar);

	var _TableFilter = __webpack_require__(225);

	var _TableFilter2 = _interopRequireDefault(_TableFilter);

	var _TableDataStore = __webpack_require__(226);

	var _util = __webpack_require__(9);

	var _util2 = _interopRequireDefault(_util);

	var _csv_export_util = __webpack_require__(227);

	var _csv_export_util2 = _interopRequireDefault(_csv_export_util);

	var _Filter = __webpack_require__(231);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-alert: 0 */
	/* eslint max-len: 0 */


	var BootstrapTable = function (_Component) {
	  _inherits(BootstrapTable, _Component);

	  function BootstrapTable(props) {
	    _classCallCheck(this, BootstrapTable);

	    var _this = _possibleConstructorReturn(this, (BootstrapTable.__proto__ || Object.getPrototypeOf(BootstrapTable)).call(this, props));

	    _this.handleSort = function () {
	      return _this.__handleSort__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleExpandRow = function () {
	      return _this.__handleExpandRow__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handlePaginationData = function () {
	      return _this.__handlePaginationData__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleDragRow = function () {
	      return _this.__handleDragRow__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleMouseLeave = function () {
	      return _this.__handleMouseLeave__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleMouseEnter = function () {
	      return _this.__handleMouseEnter__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleRowMouseOut = function () {
	      return _this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleRowMouseOver = function () {
	      return _this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleNavigateCell = function () {
	      return _this.__handleNavigateCell__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleRowClick = function () {
	      return _this.__handleRowClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleRowDoubleClick = function () {
	      return _this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleSelectAllRow = function () {
	      return _this.__handleSelectAllRow__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleShowOnlySelected = function () {
	      return _this.__handleShowOnlySelected__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleSelectRow = function () {
	      return _this.__handleSelectRow__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleAddRow = function () {
	      return _this.__handleAddRow__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.getPageByRowKey = function () {
	      return _this.__getPageByRowKey__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleDropRow = function () {
	      return _this.__handleDropRow__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleFilterData = function () {
	      return _this.__handleFilterData__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleExportCSV = function () {
	      return _this.__handleExportCSV__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleSearch = function () {
	      return _this.__handleSearch__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this._scrollTop = function () {
	      return _this.___scrollTop__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this._scrollHeader = function () {
	      return _this.___scrollHeader__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.isIE = false;
	    _this._attachCellEditFunc();
	    if (_util2.default.canUseDOM()) {
	      _this.isIE = document.documentMode;
	    }
	    _this.store = new _TableDataStore.TableDataStore(_this.props.data ? _this.props.data.slice() : []);

	    _this.initTable(_this.props);

	    if (_this.props.selectRow && _this.props.selectRow.selected) {
	      var copy = _this.props.selectRow.selected.slice();
	      _this.store.setSelectedRowKey(copy);
	    }
	    var currPage = _Const2.default.PAGE_START_INDEX;
	    if (typeof _this.props.options.page !== 'undefined') {
	      currPage = _this.props.options.page;
	    } else if (typeof _this.props.options.pageStartIndex !== 'undefined') {
	      currPage = _this.props.options.pageStartIndex;
	    }

	    _this._adjustHeaderWidth = _this._adjustHeaderWidth.bind(_this);
	    _this._adjustHeight = _this._adjustHeight.bind(_this);
	    _this._adjustTable = _this._adjustTable.bind(_this);

	    _this.state = {
	      data: _this.getTableData(),
	      currPage: currPage,
	      expanding: _this.props.options.expanding || [],
	      sizePerPage: _this.props.options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0],
	      selectedRowKeys: _this.store.getSelectedRowKeys(),
	      reset: false,
	      x: _this.props.keyBoardNav ? 0 : -1,
	      y: _this.props.keyBoardNav ? 0 : -1
	    };
	    return _this;
	  }

	  _createClass(BootstrapTable, [{
	    key: 'initTable',
	    value: function initTable(props) {
	      var _this2 = this;

	      var keyField = props.keyField;


	      var isKeyFieldDefined = typeof keyField === 'string' && keyField.length;
	      _react2.default.Children.forEach(props.children, function (column) {
	        if (column.props.isKey) {
	          if (keyField) {
	            throw new Error('Error. Multiple key column be detected in TableHeaderColumn.');
	          }
	          keyField = column.props.dataField;
	        }
	        if (column.props.filter) {
	          // a column contains a filter
	          if (!_this2.filter) {
	            // first time create the filter on the BootstrapTable
	            _this2.filter = new _Filter.Filter();
	          }
	          // pass the filter to column with filter
	          column.props.filter.emitter = _this2.filter;
	        }
	      });

	      if (this.filter) {
	        this.filter.removeAllListeners('onFilterChange');
	        this.filter.on('onFilterChange', function (currentFilter) {
	          _this2.handleFilterData(currentFilter);
	        });
	      }

	      this.colInfos = this.getColumnsDescription(props).reduce(function (prev, curr) {
	        prev[curr.name] = curr;
	        return prev;
	      }, {});

	      if (!isKeyFieldDefined && !keyField) {
	        throw new Error('Error. No any key column defined in TableHeaderColumn.\n            Use \'isKey={true}\' to specify a unique column after version 0.5.4.');
	      }

	      this.store.setProps({
	        isPagination: props.pagination,
	        keyField: keyField,
	        colInfos: this.colInfos,
	        multiColumnSearch: props.multiColumnSearch,
	        multiColumnSort: props.multiColumnSort,
	        remote: this.props.remote
	      });
	    }
	  }, {
	    key: 'getTableData',
	    value: function getTableData() {
	      var result = [];
	      var _props = this.props,
	          options = _props.options,
	          pagination = _props.pagination;

	      var sortName = options.defaultSortName || options.sortName;
	      var sortOrder = options.defaultSortOrder || options.sortOrder;
	      var searchText = options.defaultSearch;
	      if (sortName && sortOrder) {
	        this.store.setSortInfo(sortOrder, sortName);
	        this.store.sort();
	      }

	      if (searchText) {
	        this.store.search(searchText);
	      }

	      if (pagination) {
	        var page = void 0;
	        var sizePerPage = void 0;
	        if (this.store.isChangedPage()) {
	          sizePerPage = this.state.sizePerPage;
	          page = this.state.currPage;
	        } else {
	          sizePerPage = options.sizePerPage || _Const2.default.SIZE_PER_PAGE_LIST[0];
	          page = options.page || 1;
	        }
	        result = this.store.page(page, sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      return result;
	    }
	  }, {
	    key: 'getColumnsDescription',
	    value: function getColumnsDescription(_ref) {
	      var children = _ref.children;

	      var rowCount = 0;
	      _react2.default.Children.forEach(children, function (column) {
	        if (Number(column.props.row) > rowCount) {
	          rowCount = Number(column.props.row);
	        }
	      });
	      return _react2.default.Children.map(children, function (column, i) {
	        var rowIndex = column.props.row ? Number(column.props.row) : 0;
	        var rowSpan = column.props.rowSpan ? Number(column.props.rowSpan) : 1;
	        if (rowSpan + rowIndex === rowCount + 1) {
	          return {
	            name: column.props.dataField,
	            align: column.props.dataAlign,
	            sort: column.props.dataSort,
	            format: column.props.dataFormat,
	            formatExtraData: column.props.formatExtraData,
	            filterFormatted: column.props.filterFormatted,
	            filterValue: column.props.filterValue,
	            editable: column.props.editable,
	            customEditor: column.props.customEditor,
	            hidden: column.props.hidden,
	            hiddenOnInsert: column.props.hiddenOnInsert,
	            searchable: column.props.searchable,
	            className: column.props.columnClassName,
	            editClassName: column.props.editColumnClassName,
	            invalidEditColumnClassName: column.props.invalidEditColumnClassName,
	            columnTitle: column.props.columnTitle,
	            width: column.props.width,
	            text: column.props.headerText || column.props.children,
	            sortFunc: column.props.sortFunc,
	            sortFuncExtraData: column.props.sortFuncExtraData,
	            export: column.props.export,
	            expandable: column.props.expandable,
	            index: i,
	            attrs: column.props.tdAttr,
	            style: column.props.tdStyle,
	            dragHandle: column.props.dragHandle
	          };
	        }
	      });
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.store.clean();
	      this.setState({
	        data: this.getTableData(),
	        currPage: 1,
	        expanding: [],
	        sizePerPage: _Const2.default.SIZE_PER_PAGE_LIST[0],
	        selectedRowKeys: this.store.getSelectedRowKeys(),
	        reset: true
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.initTable(nextProps);
	      var options = nextProps.options,
	          selectRow = nextProps.selectRow;


	      this.store.setData(nextProps.data.slice());

	      // from #481
	      var page = this.state.currPage;
	      if (this.props.options.page !== options.page) {
	        page = options.page;
	      }
	      // from #481
	      var sizePerPage = this.state.sizePerPage;
	      if (this.props.options.sizePerPage !== options.sizePerPage) {
	        sizePerPage = options.sizePerPage;
	      }

	      if (this.isRemoteDataSource()) {
	        var data = nextProps.data.slice();
	        if (nextProps.pagination && !this.allowRemote(_Const2.default.REMOTE_PAGE)) {
	          data = this.store.page(page, sizePerPage).get();
	        }
	        this.setState({
	          data: data,
	          currPage: page,
	          sizePerPage: sizePerPage,
	          reset: false
	        });
	      } else {
	        // #125
	        // remove !options.page for #709
	        if (page > Math.ceil(nextProps.data.length / sizePerPage)) {
	          page = 1;
	        }
	        var sortList = this.store.getSortInfo();
	        var sortField = options.sortName;
	        var sortOrder = options.sortOrder;
	        if (sortField && sortOrder) {
	          this.store.setSortInfo(sortOrder, sortField);
	          this.store.sort();
	        } else if (sortList.length > 0) {
	          this.store.sort();
	        }
	        var _data = this.store.page(page, sizePerPage).get();
	        this.setState({
	          data: _data,
	          currPage: page,
	          sizePerPage: sizePerPage,
	          reset: false
	        });
	      }

	      if (selectRow && selectRow.selected) {
	        // set default select rows to store.
	        var copy = selectRow.selected.slice();
	        this.store.setSelectedRowKey(copy);
	        this.setState({
	          selectedRowKeys: copy,
	          reset: false
	        });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._adjustTable();
	      window.addEventListener('resize', this._adjustTable);
	      this.refs.body.child.refs.container.addEventListener('scroll', this._scrollHeader);
	      if (this.props.scrollTop) {
	        this._scrollTop();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this._adjustTable);
	      this.refs.body.child.refs.container.removeEventListener('scroll', this._scrollHeader);
	      if (this.filter) {
	        this.filter.removeAllListeners('onFilterChange');
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._adjustTable();
	      this._attachCellEditFunc();
	      if (this.props.options.afterTableComplete) {
	        this.props.options.afterTableComplete();
	      }
	    }
	  }, {
	    key: '_attachCellEditFunc',
	    value: function _attachCellEditFunc() {
	      var cellEdit = this.props.cellEdit;

	      if (cellEdit) {
	        this.props.cellEdit.__onCompleteEdit__ = this.handleEditCell.bind(this);
	        if (cellEdit.mode !== _Const2.default.CELL_EDIT_NONE) {
	          this.props.selectRow.clickToSelect = false;
	        }
	      }
	    }

	    /**
	     * Returns true if in the current configuration,
	     * the datagrid should load its data remotely.
	     *
	     * @param  {Object}  [props] Optional. If not given, this.props will be used
	     * @return {Boolean}
	     */

	  }, {
	    key: 'isRemoteDataSource',
	    value: function isRemoteDataSource(props) {
	      var _ref2 = props || this.props,
	          remote = _ref2.remote;

	      return remote === true || typeof remote === 'function';
	    }

	    /**
	     * Returns true if this action can be handled remote store
	     * From #990, Sometimes, we need some actions as remote, some actions are handled by default
	     * so function will tell you the target action is can be handled as remote or not.
	     * @param  {String}  [action] Required.
	     * @param  {Object}  [props] Optional. If not given, this.props will be used
	     * @return {Boolean}
	     */

	  }, {
	    key: 'allowRemote',
	    value: function allowRemote(action, props) {
	      var _ref3 = props || this.props,
	          remote = _ref3.remote;

	      if (typeof remote === 'function') {
	        var remoteObj = remote(_Const2.default.REMOTE);
	        return remoteObj[action];
	      } else {
	        return remote;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = {
	        height: this.props.height,
	        maxHeight: this.props.maxHeight
	      };

	      var columns = this.getColumnsDescription(this.props);
	      var sortList = this.store.getSortInfo();
	      var pagination = this.renderPagination();
	      var toolBar = this.renderToolBar();
	      var tableFilter = this.renderTableFilter(columns);
	      var isSelectAll = this.isSelectAll();
	      var expandColumnOptions = this.props.expandColumnOptions;
	      if (typeof expandColumnOptions.expandColumnBeforeSelectColumn === 'undefined') {
	        expandColumnOptions.expandColumnBeforeSelectColumn = true;
	      }
	      var colGroups = _util2.default.renderColGroup(columns, this.props.selectRow, expandColumnOptions);
	      var sortIndicator = this.props.options.sortIndicator;
	      if (typeof this.props.options.sortIndicator === 'undefined') sortIndicator = true;
	      var _props$options$pagina = this.props.options.paginationPosition,
	          paginationPosition = _props$options$pagina === undefined ? _Const2.default.PAGINATION_POS_BOTTOM : _props$options$pagina;

	      var showPaginationOnTop = paginationPosition !== _Const2.default.PAGINATION_POS_BOTTOM;
	      var showPaginationOnBottom = paginationPosition !== _Const2.default.PAGINATION_POS_TOP;

	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('react-bs-table-container', this.props.className, this.props.containerClass),
	          style: this.props.containerStyle },
	        toolBar,
	        showPaginationOnTop ? pagination : null,
	        _react2.default.createElement(
	          'div',
	          { ref: 'table',
	            className: (0, _classnames2.default)('react-bs-table', this.props.tableContainerClass),
	            style: _extends({}, style, this.props.tableStyle),
	            onMouseEnter: this.handleMouseEnter,
	            onMouseLeave: this.handleMouseLeave },
	          _react2.default.createElement(
	            _TableHeader2.default,
	            {
	              ref: 'header',
	              colGroups: colGroups,
	              headerContainerClass: this.props.headerContainerClass,
	              tableHeaderClass: this.props.tableHeaderClass,
	              style: this.props.headerStyle,
	              rowSelectType: this.props.selectRow.mode,
	              customComponent: this.props.selectRow.customComponent,
	              hideSelectColumn: this.props.selectRow.hideSelectColumn,
	              sortList: sortList,
	              sortIndicator: sortIndicator,
	              onSort: this.handleSort,
	              onSelectAllRow: this.handleSelectAllRow,
	              bordered: this.props.bordered,
	              condensed: this.props.condensed,
	              isFiltered: this.filter ? true : false,
	              isSelectAll: isSelectAll,
	              reset: this.state.reset,
	              expandColumnVisible: expandColumnOptions.expandColumnVisible,
	              expandColumnComponent: expandColumnOptions.expandColumnComponent,
	              expandColumnBeforeSelectColumn: expandColumnOptions.expandColumnBeforeSelectColumn },
	            this.props.children
	          ),
	          _react2.default.createElement(_TableBody2.default, { ref: 'body',
	            bodyContainerClass: this.props.bodyContainerClass,
	            tableBodyClass: this.props.tableBodyClass,
	            style: _extends({}, style, this.props.bodyStyle),
	            data: this.state.data,
	            draggableRow: this.props.draggable,
	            handleDragRow: this.handleDragRow,
	            onDroppedRow: this.handleDroppedRow.bind(this),
	            expandComponent: this.props.expandComponent,
	            expandableRow: this.props.expandableRow,
	            expandRowBgColor: this.props.options.expandRowBgColor,
	            expandBy: this.props.options.expandBy || _Const2.default.EXPAND_BY_ROW,
	            columns: columns,
	            trClassName: this.props.trClassName,
	            striped: this.props.striped,
	            bordered: this.props.bordered,
	            hover: this.props.hover,
	            keyField: this.store.getKeyField(),
	            condensed: this.props.condensed,
	            selectRow: this.props.selectRow,
	            expandColumnOptions: this.props.expandColumnOptions,
	            cellEdit: this.props.cellEdit,
	            selectedRowKeys: this.state.selectedRowKeys,
	            onRowClick: this.handleRowClick,
	            onRowDoubleClick: this.handleRowDoubleClick,
	            onRowMouseOver: this.handleRowMouseOver,
	            onRowMouseOut: this.handleRowMouseOut,
	            onSelectRow: this.handleSelectRow,
	            noDataText: this.props.options.noDataText,
	            withoutNoDataText: this.props.options.withoutNoDataText,
	            expanding: this.state.expanding,
	            onExpand: this.handleExpandRow,
	            beforeShowError: this.props.options.beforeShowError,
	            keyBoardNav: this.props.keyBoardNav,
	            onNavigateCell: this.handleNavigateCell,
	            x: this.state.x,
	            y: this.state.y })
	        ),
	        tableFilter,
	        showPaginationOnBottom ? pagination : null
	      );
	    }
	  }, {
	    key: 'isSelectAll',
	    value: function isSelectAll() {
	      if (this.store.isEmpty()) return false;
	      var unselectable = this.props.selectRow.unselectable;
	      var defaultSelectRowKeys = this.store.getSelectedRowKeys();
	      var allRowKeys = this.store.getAllRowkey();

	      if (defaultSelectRowKeys.length === 0) return false;
	      var match = 0;
	      var noFound = 0;
	      var unSelectableCnt = 0;
	      defaultSelectRowKeys.forEach(function (selected) {
	        if (allRowKeys.indexOf(selected) !== -1) match++;else noFound++;
	        if (unselectable && unselectable.indexOf(selected) !== -1) unSelectableCnt++;
	      });

	      if (noFound === defaultSelectRowKeys.length) return false;
	      if (match === allRowKeys.length) {
	        return true;
	      } else {
	        if (unselectable && match <= unSelectableCnt && unSelectableCnt === unselectable.length) return false;else return 'indeterminate';
	      }
	      // return (match === allRowKeys.length) ? true : 'indeterminate';
	    }
	  }, {
	    key: 'cleanSelected',
	    value: function cleanSelected() {
	      this.store.setSelectedRowKey([]);
	      this.setState({
	        selectedRowKeys: [],
	        reset: false
	      });
	    }
	  }, {
	    key: '__handleSort__REACT_HOT_LOADER__',
	    value: function __handleSort__REACT_HOT_LOADER__() {
	      return this.__handleSort__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSort__REACT_HOT_LOADER__',
	    value: function __handleSort__REACT_HOT_LOADER__(order, sortField) {
	      if (this.props.options.onSortChange) {
	        this.props.options.onSortChange(sortField, order, this.props);
	      }
	      this.store.setSortInfo(order, sortField);
	      if (this.allowRemote(_Const2.default.REMOTE_SORT)) {
	        return;
	      }

	      var result = this.store.sort().get();
	      this.setState({
	        data: result,
	        reset: false
	      });
	    }
	  }, {
	    key: '__handleExpandRow__REACT_HOT_LOADER__',
	    value: function __handleExpandRow__REACT_HOT_LOADER__() {
	      return this.__handleExpandRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleExpandRow__REACT_HOT_LOADER__',
	    value: function __handleExpandRow__REACT_HOT_LOADER__(expanding) {
	      var _this3 = this;

	      this.setState({ expanding: expanding, reset: false }, function () {
	        _this3._adjustHeaderWidth();
	      });
	    }
	  }, {
	    key: '__handlePaginationData__REACT_HOT_LOADER__',
	    value: function __handlePaginationData__REACT_HOT_LOADER__() {
	      return this.__handlePaginationData__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handlePaginationData__REACT_HOT_LOADER__',
	    value: function __handlePaginationData__REACT_HOT_LOADER__(page, sizePerPage) {
	      var _props$options = this.props.options,
	          onPageChange = _props$options.onPageChange,
	          pageStartIndex = _props$options.pageStartIndex;

	      if (onPageChange) {
	        onPageChange(page, sizePerPage);
	      }

	      this.setState({
	        currPage: page,
	        sizePerPage: sizePerPage,
	        reset: false
	      });

	      if (this.allowRemote(_Const2.default.REMOTE_PAGE)) {
	        return;
	      }

	      // We calculate an offset here in order to properly fetch the indexed data,
	      // despite the page start index not always being 1
	      var normalizedPage = void 0;
	      if (pageStartIndex !== undefined) {
	        var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
	        normalizedPage = page + offset;
	      } else {
	        normalizedPage = page;
	      }

	      var result = this.store.page(normalizedPage, sizePerPage).get();

	      this.setState({ data: result, reset: false });
	    }
	  }, {
	    key: '__handleDragRow__REACT_HOT_LOADER__',
	    value: function __handleDragRow__REACT_HOT_LOADER__() {
	      return this.__handleDragRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleDragRow__REACT_HOT_LOADER__',
	    value: function __handleDragRow__REACT_HOT_LOADER__(dragIndex, hoverIndex) {
	      var result = this.store.drag(dragIndex, hoverIndex).get();

	      this.setState({ data: result });
	    }
	  }, {
	    key: 'handleDroppedRow',
	    value: function handleDroppedRow(dragIndex, dropIndex) {
	      if (this.props.onDroppedRow) {
	        var offset = this.store.pageObj.start;
	        this.props.onDroppedRow(dragIndex + offset, dropIndex + offset);
	      }
	    }
	  }, {
	    key: '__handleMouseLeave__REACT_HOT_LOADER__',
	    value: function __handleMouseLeave__REACT_HOT_LOADER__() {
	      return this.__handleMouseLeave__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleMouseLeave__REACT_HOT_LOADER__',
	    value: function __handleMouseLeave__REACT_HOT_LOADER__() {
	      if (this.props.options.onMouseLeave) {
	        this.props.options.onMouseLeave();
	      }
	    }
	  }, {
	    key: '__handleMouseEnter__REACT_HOT_LOADER__',
	    value: function __handleMouseEnter__REACT_HOT_LOADER__() {
	      return this.__handleMouseEnter__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleMouseEnter__REACT_HOT_LOADER__',
	    value: function __handleMouseEnter__REACT_HOT_LOADER__() {
	      if (this.props.options.onMouseEnter) {
	        this.props.options.onMouseEnter();
	      }
	    }
	  }, {
	    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOut__REACT_HOT_LOADER__() {
	      return this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOut__REACT_HOT_LOADER__(row, event) {
	      if (this.props.options.onRowMouseOut) {
	        this.props.options.onRowMouseOut(row, event);
	      }
	    }
	  }, {
	    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOver__REACT_HOT_LOADER__() {
	      return this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOver__REACT_HOT_LOADER__(row, event) {
	      if (this.props.options.onRowMouseOver) {
	        this.props.options.onRowMouseOver(row, event);
	      }
	    }
	  }, {
	    key: '__handleNavigateCell__REACT_HOT_LOADER__',
	    value: function __handleNavigateCell__REACT_HOT_LOADER__() {
	      return this.__handleNavigateCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleNavigateCell__REACT_HOT_LOADER__',
	    value: function __handleNavigateCell__REACT_HOT_LOADER__(_ref4) {
	      var offSetX = _ref4.x,
	          offSetY = _ref4.y,
	          lastEditCell = _ref4.lastEditCell;
	      var pagination = this.props.pagination;
	      var _state = this.state,
	          x = _state.x,
	          y = _state.y,
	          currPage = _state.currPage;

	      x += offSetX;
	      y += offSetY;
	      // currPage += 1;
	      // console.log(currPage);

	      var columns = this.store.getColInfos();
	      var visibleRowSize = this.state.data.length;
	      var visibleColumnSize = Object.keys(columns).filter(function (k) {
	        return !columns[k].hidden;
	      }).length;

	      if (y >= visibleRowSize) {
	        currPage++;
	        var lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
	        if (currPage <= lastPage) {
	          this.handlePaginationData(currPage, this.state.sizePerPage);
	        } else {
	          return;
	        }
	        y = 0;
	      } else if (y < 0) {
	        currPage--;
	        if (currPage > 0) {
	          this.handlePaginationData(currPage, this.state.sizePerPage);
	        } else {
	          return;
	        }
	        y = visibleRowSize - 1;
	      } else if (x >= visibleColumnSize) {
	        if (y + 1 === visibleRowSize) {
	          currPage++;
	          var _lastPage = pagination ? this.refs.pagination.getLastPage() : -1;
	          if (currPage <= _lastPage) {
	            this.handlePaginationData(currPage, this.state.sizePerPage);
	          } else {
	            return;
	          }
	          y = 0;
	        } else {
	          y++;
	        }
	        x = lastEditCell ? 1 : 0;
	      } else if (x < 0) {
	        x = visibleColumnSize - 1;
	        if (y === 0) {
	          currPage--;
	          if (currPage > 0) {
	            this.handlePaginationData(currPage, this.state.sizePerPage);
	          } else {
	            return;
	          }
	          y = this.state.sizePerPage - 1;
	        } else {
	          y--;
	        }
	      }
	      this.setState({
	        x: x, y: y, currPage: currPage, reset: false
	      });
	    }
	  }, {
	    key: '__handleRowClick__REACT_HOT_LOADER__',
	    value: function __handleRowClick__REACT_HOT_LOADER__() {
	      return this.__handleRowClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowClick__REACT_HOT_LOADER__',
	    value: function __handleRowClick__REACT_HOT_LOADER__(row, rowIndex, cellIndex) {
	      var _props2 = this.props,
	          options = _props2.options,
	          keyBoardNav = _props2.keyBoardNav;

	      if (options.onRowClick) {
	        options.onRowClick(row);
	      }
	      if (keyBoardNav) {
	        var _ref5 = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav : {},
	            clickToNav = _ref5.clickToNav;

	        clickToNav = clickToNav === false ? clickToNav : true;
	        if (clickToNav) {
	          this.setState({
	            x: cellIndex,
	            y: rowIndex,
	            reset: false
	          });
	        }
	      }
	    }
	  }, {
	    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
	    value: function __handleRowDoubleClick__REACT_HOT_LOADER__() {
	      return this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
	    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(row) {
	      if (this.props.options.onRowDoubleClick) {
	        this.props.options.onRowDoubleClick(row);
	      }
	    }
	  }, {
	    key: '__handleSelectAllRow__REACT_HOT_LOADER__',
	    value: function __handleSelectAllRow__REACT_HOT_LOADER__() {
	      return this.__handleSelectAllRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSelectAllRow__REACT_HOT_LOADER__',
	    value: function __handleSelectAllRow__REACT_HOT_LOADER__(e) {
	      var isSelected = e.currentTarget.checked;
	      var keyField = this.store.getKeyField();
	      var _props$selectRow = this.props.selectRow,
	          onSelectAll = _props$selectRow.onSelectAll,
	          unselectable = _props$selectRow.unselectable,
	          selected = _props$selectRow.selected;

	      var selectedRowKeys = [];
	      var result = true;
	      var rows = isSelected ? this.store.get() : this.store.getRowByKey(this.state.selectedRowKeys);

	      if (unselectable && unselectable.length > 0) {
	        if (isSelected) {
	          rows = rows.filter(function (r) {
	            return unselectable.indexOf(r[keyField]) === -1 || selected && selected.indexOf(r[keyField]) !== -1;
	          });
	        } else {
	          rows = rows.filter(function (r) {
	            return unselectable.indexOf(r[keyField]) === -1;
	          });
	        }
	      }

	      if (onSelectAll) {
	        result = this.props.selectRow.onSelectAll(isSelected, rows);
	      }

	      if (typeof result == 'undefined' || result !== false) {
	        if (isSelected) {
	          selectedRowKeys = Array.isArray(result) ? result : rows.map(function (r) {
	            return r[keyField];
	          });
	        } else {
	          if (unselectable && selected) {
	            selectedRowKeys = selected.filter(function (r) {
	              return unselectable.indexOf(r) > -1;
	            });
	          }
	        }

	        this.store.setSelectedRowKey(selectedRowKeys);
	        this.setState({ selectedRowKeys: selectedRowKeys, reset: false });
	      }
	    }
	  }, {
	    key: '__handleShowOnlySelected__REACT_HOT_LOADER__',
	    value: function __handleShowOnlySelected__REACT_HOT_LOADER__() {
	      return this.__handleShowOnlySelected__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleShowOnlySelected__REACT_HOT_LOADER__',
	    value: function __handleShowOnlySelected__REACT_HOT_LOADER__() {
	      this.store.ignoreNonSelected();
	      var result = void 0;
	      if (this.props.pagination) {
	        result = this.store.page(1, this.state.sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      this.setState({
	        data: result,
	        reset: false,
	        currPage: this.props.options.pageStartIndex || _Const2.default.PAGE_START_INDEX
	      });
	    }
	  }, {
	    key: '__handleSelectRow__REACT_HOT_LOADER__',
	    value: function __handleSelectRow__REACT_HOT_LOADER__() {
	      return this.__handleSelectRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSelectRow__REACT_HOT_LOADER__',
	    value: function __handleSelectRow__REACT_HOT_LOADER__(row, isSelected, e) {
	      var result = true;
	      var currSelected = this.store.getSelectedRowKeys();
	      var rowKey = row[this.store.getKeyField()];
	      var selectRow = this.props.selectRow;

	      if (selectRow.onSelect) {
	        result = selectRow.onSelect(row, isSelected, e);
	      }

	      if (typeof result === 'undefined' || result !== false) {
	        if (selectRow.mode === _Const2.default.ROW_SELECT_SINGLE) {
	          currSelected = isSelected ? [rowKey] : [];
	        } else {
	          if (isSelected) {
	            currSelected.push(rowKey);
	          } else {
	            currSelected = currSelected.filter(function (key) {
	              return rowKey !== key;
	            });
	          }
	        }

	        this.store.setSelectedRowKey(currSelected);
	        this.setState({
	          selectedRowKeys: currSelected,
	          reset: false
	        });
	      }
	    }
	  }, {
	    key: 'handleEditCell',
	    value: function handleEditCell(newVal, rowIndex, colIndex) {
	      var onCellEdit = this.props.options.onCellEdit;
	      var _props$cellEdit = this.props.cellEdit,
	          beforeSaveCell = _props$cellEdit.beforeSaveCell,
	          afterSaveCell = _props$cellEdit.afterSaveCell;

	      var columns = this.getColumnsDescription(this.props);
	      var fieldName = columns[colIndex].name;

	      if (beforeSaveCell) {
	        var isValid = beforeSaveCell(this.state.data[rowIndex], fieldName, newVal);
	        if (!isValid && typeof isValid !== 'undefined') {
	          this.setState({
	            data: this.store.get(),
	            reset: false
	          });
	          return;
	        }
	      }

	      if (onCellEdit) {
	        newVal = onCellEdit(this.state.data[rowIndex], fieldName, newVal);
	      }

	      if (this.allowRemote(_Const2.default.REMOTE_CELL_EDIT)) {
	        if (afterSaveCell) {
	          afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
	        }
	        return;
	      }

	      var result = this.store.edit(newVal, rowIndex, fieldName).get();
	      this.setState({
	        data: result,
	        reset: false
	      });

	      if (afterSaveCell) {
	        afterSaveCell(this.state.data[rowIndex], fieldName, newVal);
	      }
	    }
	  }, {
	    key: 'handleAddRowAtBegin',
	    value: function handleAddRowAtBegin(newObj) {
	      try {
	        this.store.addAtBegin(newObj);
	      } catch (e) {
	        return e;
	      }
	      this._handleAfterAddingRow(newObj, true);
	    }
	  }, {
	    key: '__handleAddRow__REACT_HOT_LOADER__',
	    value: function __handleAddRow__REACT_HOT_LOADER__() {
	      return this.__handleAddRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleAddRow__REACT_HOT_LOADER__',
	    value: function __handleAddRow__REACT_HOT_LOADER__(newObj) {
	      var onAddRow = this.props.options.onAddRow;

	      if (onAddRow) {
	        var colInfos = this.store.getColInfos();
	        onAddRow(newObj, colInfos);
	      }

	      if (this.allowRemote(_Const2.default.REMOTE_INSERT_ROW)) {
	        if (this.props.options.afterInsertRow) {
	          this.props.options.afterInsertRow(newObj);
	        }
	        return null;
	      }

	      try {
	        this.store.add(newObj);
	      } catch (e) {
	        return e.message;
	      }
	      this._handleAfterAddingRow(newObj, false);
	    }
	  }, {
	    key: 'getSizePerPage',
	    value: function getSizePerPage() {
	      return this.state.sizePerPage;
	    }
	  }, {
	    key: 'getCurrentPage',
	    value: function getCurrentPage() {
	      return this.state.currPage;
	    }
	  }, {
	    key: 'getTableDataIgnorePaging',
	    value: function getTableDataIgnorePaging() {
	      return this.store.getCurrentDisplayData();
	    }
	  }, {
	    key: '__getPageByRowKey__REACT_HOT_LOADER__',
	    value: function __getPageByRowKey__REACT_HOT_LOADER__() {
	      return this.__getPageByRowKey__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__getPageByRowKey__REACT_HOT_LOADER__',
	    value: function __getPageByRowKey__REACT_HOT_LOADER__(rowKey) {
	      var sizePerPage = this.state.sizePerPage;

	      var currentData = this.store.getCurrentDisplayData();
	      var keyField = this.store.getKeyField();
	      var result = currentData.findIndex(function (x) {
	        return x[keyField] === rowKey;
	      });
	      if (result > -1) {
	        return parseInt(result / sizePerPage, 10) + 1;
	      } else {
	        return result;
	      }
	    }
	  }, {
	    key: '__handleDropRow__REACT_HOT_LOADER__',
	    value: function __handleDropRow__REACT_HOT_LOADER__() {
	      return this.__handleDropRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleDropRow__REACT_HOT_LOADER__',
	    value: function __handleDropRow__REACT_HOT_LOADER__(rowKeys) {
	      var _this4 = this;

	      var dropRowKeys = rowKeys ? rowKeys : this.store.getSelectedRowKeys();
	      // add confirm before the delete action if that option is set.
	      if (dropRowKeys && dropRowKeys.length > 0) {
	        if (this.props.options.handleConfirmDeleteRow) {
	          this.props.options.handleConfirmDeleteRow(function () {
	            _this4.deleteRow(dropRowKeys);
	          }, dropRowKeys);
	        } else if (confirm('Are you sure you want to delete?')) {
	          this.deleteRow(dropRowKeys);
	        }
	      }
	    }
	  }, {
	    key: 'deleteRow',
	    value: function deleteRow(dropRowKeys) {
	      var onDeleteRow = this.props.options.onDeleteRow;

	      if (onDeleteRow) {
	        onDeleteRow(dropRowKeys);
	      }

	      this.store.setSelectedRowKey([]); // clear selected row key

	      if (this.allowRemote(_Const2.default.REMOTE_DROP_ROW)) {
	        if (this.props.options.afterDeleteRow) {
	          this.props.options.afterDeleteRow(dropRowKeys);
	        }
	        return;
	      }

	      this.store.remove(dropRowKeys); // remove selected Row
	      var result = void 0;
	      if (this.props.pagination) {
	        var sizePerPage = this.state.sizePerPage;

	        var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
	        var currPage = this.state.currPage;

	        if (currPage > currLastPage) currPage = currLastPage;
	        result = this.store.page(currPage, sizePerPage).get();
	        this.setState({
	          data: result,
	          selectedRowKeys: this.store.getSelectedRowKeys(),
	          currPage: currPage,
	          reset: false
	        });
	      } else {
	        result = this.store.get();
	        this.setState({
	          data: result,
	          reset: false,
	          selectedRowKeys: this.store.getSelectedRowKeys()
	        });
	      }
	      if (this.props.options.afterDeleteRow) {
	        this.props.options.afterDeleteRow(dropRowKeys);
	      }
	    }
	  }, {
	    key: '__handleFilterData__REACT_HOT_LOADER__',
	    value: function __handleFilterData__REACT_HOT_LOADER__() {
	      return this.__handleFilterData__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleFilterData__REACT_HOT_LOADER__',
	    value: function __handleFilterData__REACT_HOT_LOADER__(filterObj) {
	      var onFilterChange = this.props.options.onFilterChange;

	      if (onFilterChange) {
	        var colInfos = this.store.getColInfos();
	        onFilterChange(filterObj, colInfos);
	      }

	      this.setState({
	        currPage: this.props.options.pageStartIndex || _Const2.default.PAGE_START_INDEX,
	        reset: false
	      });

	      if (this.allowRemote(_Const2.default.REMOTE_FILTER)) {
	        if (this.props.options.afterColumnFilter) {
	          this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
	        }
	        return;
	      }

	      this.store.filter(filterObj);

	      var sortList = this.store.getSortInfo();

	      if (sortList.length > 0) {
	        this.store.sort();
	      }

	      var result = void 0;

	      if (this.props.pagination) {
	        var sizePerPage = this.state.sizePerPage;

	        result = this.store.page(1, sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      if (this.props.options.afterColumnFilter) {
	        this.props.options.afterColumnFilter(filterObj, this.store.getDataIgnoringPagination());
	      }
	      this.setState({
	        data: result,
	        reset: false
	      });
	    }
	  }, {
	    key: '__handleExportCSV__REACT_HOT_LOADER__',
	    value: function __handleExportCSV__REACT_HOT_LOADER__() {
	      return this.__handleExportCSV__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleExportCSV__REACT_HOT_LOADER__',
	    value: function __handleExportCSV__REACT_HOT_LOADER__() {
	      var result = {};

	      var csvFileName = this.props.csvFileName;
	      var onExportToCSV = this.props.options.onExportToCSV;

	      if (onExportToCSV) {
	        result = onExportToCSV();
	      } else {
	        result = this.store.getDataIgnoringPagination();
	      }

	      var keys = [];
	      this.props.children.map(function (column) {
	        if (column.props.export === true || typeof column.props.export === 'undefined' && column.props.hidden === false) {
	          keys.push({
	            field: column.props.dataField,
	            format: column.props.csvFormat,
	            extraData: column.props.csvFormatExtraData,
	            header: column.props.csvHeader || column.props.dataField,
	            row: Number(column.props.row) || 0,
	            rowSpan: Number(column.props.rowSpan) || 1,
	            colSpan: Number(column.props.colSpan) || 1
	          });
	        }
	      });

	      if (typeof csvFileName === 'function') {
	        csvFileName = csvFileName();
	      }

	      (0, _csv_export_util2.default)(result, keys, csvFileName);
	    }
	  }, {
	    key: '__handleSearch__REACT_HOT_LOADER__',
	    value: function __handleSearch__REACT_HOT_LOADER__() {
	      return this.__handleSearch__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSearch__REACT_HOT_LOADER__',
	    value: function __handleSearch__REACT_HOT_LOADER__(searchText) {
	      // Set search field if this function being called outside
	      // but it's not necessary if calling fron inside.
	      if (this.refs.toolbar) {
	        this.refs.toolbar.setSearchInput(searchText);
	      }
	      var onSearchChange = this.props.options.onSearchChange;

	      if (onSearchChange) {
	        var colInfos = this.store.getColInfos();
	        onSearchChange(searchText, colInfos, this.props.multiColumnSearch);
	      }

	      this.setState({
	        currPage: this.props.options.pageStartIndex || _Const2.default.PAGE_START_INDEX,
	        reset: false
	      });

	      if (this.allowRemote(_Const2.default.REMOTE_SEARCH)) {
	        if (this.props.options.afterSearch) {
	          this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
	        }
	        return;
	      }

	      this.store.search(searchText);

	      var sortList = this.store.getSortInfo();

	      if (sortList.length > 0) {
	        this.store.sort();
	      }

	      var result = void 0;
	      if (this.props.pagination) {
	        var sizePerPage = this.state.sizePerPage;

	        result = this.store.page(1, sizePerPage).get();
	      } else {
	        result = this.store.get();
	      }
	      if (this.props.options.afterSearch) {
	        this.props.options.afterSearch(searchText, this.store.getDataIgnoringPagination());
	      }
	      this.setState({
	        data: result,
	        reset: false
	      });
	    }
	  }, {
	    key: 'renderPagination',
	    value: function renderPagination() {
	      if (this.props.pagination) {
	        var dataSize = void 0;
	        if (this.allowRemote(_Const2.default.REMOTE_PAGE)) {
	          dataSize = this.props.fetchInfo.dataTotalSize;
	        } else {
	          dataSize = this.store.getDataNum();
	        }
	        var options = this.props.options;

	        var withFirstAndLast = options.withFirstAndLast === undefined ? true : options.withFirstAndLast;
	        if (Math.ceil(dataSize / this.state.sizePerPage) <= 1 && this.props.ignoreSinglePage) return null;
	        return _react2.default.createElement(
	          'div',
	          { className: 'react-bs-table-pagination' },
	          _react2.default.createElement(_PaginationList2.default, {
	            ref: 'pagination',
	            withFirstAndLast: withFirstAndLast,
	            alwaysShowAllBtns: options.alwaysShowAllBtns,
	            currPage: this.state.currPage,
	            changePage: this.handlePaginationData,
	            sizePerPage: this.state.sizePerPage,
	            sizePerPageList: options.sizePerPageList || _Const2.default.SIZE_PER_PAGE_LIST,
	            pageStartIndex: options.pageStartIndex,
	            paginationShowsTotal: options.paginationShowsTotal,
	            paginationSize: options.paginationSize || _Const2.default.PAGINATION_SIZE,
	            dataSize: dataSize,
	            onSizePerPageList: options.onSizePerPageList,
	            prePage: options.prePage || _Const2.default.PRE_PAGE,
	            nextPage: options.nextPage || _Const2.default.NEXT_PAGE,
	            firstPage: options.firstPage || _Const2.default.FIRST_PAGE,
	            lastPage: options.lastPage || _Const2.default.LAST_PAGE,
	            prePageTitle: options.prePageTitle || _Const2.default.PRE_PAGE_TITLE,
	            nextPageTitle: options.nextPageTitle || _Const2.default.NEXT_PAGE_TITLE,
	            firstPageTitle: options.firstPageTitle || _Const2.default.FIRST_PAGE_TITLE,
	            lastPageTitle: options.lastPageTitle || _Const2.default.LAST_PAGE_TITLE,
	            hideSizePerPage: options.hideSizePerPage,
	            sizePerPageDropDown: options.sizePerPageDropDown,
	            hidePageListOnlyOnePage: options.hidePageListOnlyOnePage,
	            paginationPanel: options.paginationPanel,
	            open: false })
	        );
	      }
	      return null;
	    }
	  }, {
	    key: 'renderToolBar',
	    value: function renderToolBar() {
	      var _props3 = this.props,
	          exportCSV = _props3.exportCSV,
	          selectRow = _props3.selectRow,
	          insertRow = _props3.insertRow,
	          deleteRow = _props3.deleteRow,
	          search = _props3.search,
	          children = _props3.children;

	      var enableShowOnlySelected = selectRow && selectRow.showOnlySelected;
	      var print = typeof this.props.options.printToolBar === 'undefined' ? true : this.props.options.printToolBar;
	      if (enableShowOnlySelected || insertRow || deleteRow || search || exportCSV || this.props.options.searchPanel || this.props.options.btnGroup || this.props.options.toolBar) {
	        var columns = void 0;
	        if (Array.isArray(children)) {
	          columns = children.map(function (column, r) {
	            var props = column.props;

	            return {
	              name: props.headerText || props.children,
	              field: props.dataField,
	              hiddenOnInsert: props.hiddenOnInsert,
	              // when you want same auto generate value and not allow edit, example ID field
	              autoValue: props.autoValue || false,
	              // for create editor, no params for column.editable() indicate that editor for new row
	              editable: props.editable && typeof props.editable === 'function' ? props.editable() : props.editable,
	              format: props.dataFormat ? function (value) {
	                return props.dataFormat(value, null, props.formatExtraData, r).replace(/<.*?>/g, '');
	              } : false
	            };
	          });
	        } else {
	          columns = [{
	            name: children.props.headerText || children.props.children,
	            field: children.props.dataField,
	            editable: children.props.editable,
	            hiddenOnInsert: children.props.hiddenOnInsert
	          }];
	        }
	        return _react2.default.createElement(
	          'div',
	          { className: 'react-bs-table-tool-bar ' + (print ? '' : 'hidden-print') },
	          _react2.default.createElement(_ToolBar2.default, {
	            ref: 'toolbar',
	            defaultSearch: this.props.options.defaultSearch,
	            clearSearch: this.props.options.clearSearch,
	            searchPosition: this.props.options.searchPosition,
	            searchDelayTime: this.props.options.searchDelayTime,
	            enableInsert: insertRow,
	            enableDelete: deleteRow,
	            enableSearch: search,
	            enableExportCSV: exportCSV,
	            enableShowOnlySelected: enableShowOnlySelected,
	            columns: columns,
	            searchPlaceholder: this.props.searchPlaceholder,
	            exportCSVText: this.props.options.exportCSVText,
	            insertText: this.props.options.insertText,
	            deleteText: this.props.options.deleteText,
	            saveText: this.props.options.saveText,
	            closeText: this.props.options.closeText,
	            ignoreEditable: this.props.options.ignoreEditable,
	            onAddRow: this.handleAddRow,
	            onDropRow: this.handleDropRow,
	            onSearch: this.handleSearch,
	            onExportCSV: this.handleExportCSV,
	            onShowOnlySelected: this.handleShowOnlySelected,
	            insertModalHeader: this.props.options.insertModalHeader,
	            insertModalFooter: this.props.options.insertModalFooter,
	            insertModalBody: this.props.options.insertModalBody,
	            insertModal: this.props.options.insertModal,
	            insertBtn: this.props.options.insertBtn,
	            deleteBtn: this.props.options.deleteBtn,
	            showSelectedOnlyBtn: this.props.options.showSelectedOnlyBtn,
	            exportCSVBtn: this.props.options.exportCSVBtn,
	            clearSearchBtn: this.props.options.clearSearchBtn,
	            searchField: this.props.options.searchField,
	            searchPanel: this.props.options.searchPanel,
	            btnGroup: this.props.options.btnGroup,
	            toolBar: this.props.options.toolBar,
	            reset: this.state.reset })
	        );
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: 'renderTableFilter',
	    value: function renderTableFilter(columns) {
	      if (this.props.columnFilter) {
	        return _react2.default.createElement(_TableFilter2.default, { columns: columns,
	          rowSelectType: this.props.selectRow.mode,
	          onFilter: this.handleFilterData });
	      } else {
	        return null;
	      }
	    }
	  }, {
	    key: '___scrollTop__REACT_HOT_LOADER__',
	    value: function ___scrollTop__REACT_HOT_LOADER__() {
	      return this.___scrollTop__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '___scrollTop__REACT_HOT_LOADER__',
	    value: function ___scrollTop__REACT_HOT_LOADER__() {
	      var scrollTop = this.props.scrollTop;

	      if (scrollTop === _Const2.default.SCROLL_TOP) {
	        this.refs.body.child.refs.container.scrollTop = 0;
	      } else if (scrollTop === _Const2.default.SCROLL_BOTTOM) {
	        this.refs.body.child.refs.container.scrollTop = this.refs.body.child.refs.container.scrollHeight;
	      } else if (typeof scrollTop === 'number' && !isNaN(scrollTop)) {
	        this.refs.body.child.refs.container.scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: '___scrollHeader__REACT_HOT_LOADER__',
	    value: function ___scrollHeader__REACT_HOT_LOADER__() {
	      return this.___scrollHeader__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '___scrollHeader__REACT_HOT_LOADER__',
	    value: function ___scrollHeader__REACT_HOT_LOADER__(e) {
	      this.refs.header.refs.container.scrollLeft = e.currentTarget.scrollLeft;
	    }
	  }, {
	    key: '_adjustTable',
	    value: function _adjustTable() {
	      this._adjustHeight();
	      if (!this.props.printable) {
	        this._adjustHeaderWidth();
	      }
	    }
	  }, {
	    key: '_adjustHeaderWidth',
	    value: function _adjustHeaderWidth() {
	      var header = this.refs.header.getHeaderColGrouop();
	      var tbody = this.refs.body.child.refs.tbody;
	      var bodyHeader = this.refs.body.child.getHeaderColGrouop();
	      var firstRow = tbody.childNodes[0];
	      var isScroll = tbody.parentNode.getBoundingClientRect().height > tbody.parentNode.parentNode.getBoundingClientRect().height;

	      var scrollBarWidth = isScroll ? _util2.default.getScrollBarWidth() : 0;
	      if (firstRow && this.store.getDataNum()) {
	        if (isScroll) {
	          var cells = firstRow.childNodes;
	          for (var i = 0; i < cells.length; i++) {
	            var cell = cells[i];
	            var computedStyle = window.getComputedStyle(cell);
	            var width = parseFloat(computedStyle.width.replace('px', ''));
	            if (this.isIE) {
	              var paddingLeftWidth = parseFloat(computedStyle.paddingLeft.replace('px', ''));
	              var paddingRightWidth = parseFloat(computedStyle.paddingRight.replace('px', ''));
	              var borderRightWidth = parseFloat(computedStyle.borderRightWidth.replace('px', ''));
	              var borderLeftWidth = parseFloat(computedStyle.borderLeftWidth.replace('px', ''));
	              width = width + paddingLeftWidth + paddingRightWidth + borderRightWidth + borderLeftWidth;
	            }
	            var lastPadding = cells.length - 1 === i ? scrollBarWidth : 0;
	            if (width <= 0) {
	              width = 120;
	              cell.width = width + lastPadding + 'px';
	            }
	            var result = width + lastPadding + 'px';
	            header[i].style.width = result;
	            header[i].style.minWidth = result;
	            if (cells.length - 1 === i) {
	              bodyHeader[i].style.width = width + 'px';
	              bodyHeader[i].style.minWidth = width + 'px';
	            } else {
	              bodyHeader[i].style.width = result;
	              bodyHeader[i].style.minWidth = result;
	            }
	          }
	        }
	      } else {
	        _react2.default.Children.forEach(this.props.children, function (child, i) {
	          if (child.props.width) {
	            header[i].style.width = child.props.width + 'px';
	            header[i].style.minWidth = child.props.width + 'px';
	          }
	        });
	      }
	    }
	  }, {
	    key: '_adjustHeight',
	    value: function _adjustHeight() {
	      var height = this.props.height;
	      var maxHeight = this.props.maxHeight;

	      if (typeof height === 'number' && !isNaN(height) || height.indexOf('%') === -1) {
	        this.refs.body.child.refs.container.style.height = parseFloat(height, 10) - this.refs.header.refs.container.offsetHeight + 'px';
	      }
	      if (maxHeight) {
	        maxHeight = typeof maxHeight === 'number' ? maxHeight : parseInt(maxHeight.replace('px', ''), 10);

	        this.refs.body.child.refs.container.style.maxHeight = maxHeight - this.refs.header.refs.container.offsetHeight + 'px';
	      }
	    }
	  }, {
	    key: '_handleAfterAddingRow',
	    value: function _handleAfterAddingRow(newObj, atTheBeginning) {
	      var result = void 0;
	      if (this.props.pagination) {
	        // if pagination is enabled and inserting row at the end,
	        // change page to the last page
	        // otherwise, change it to the first page
	        var sizePerPage = this.state.sizePerPage;


	        if (atTheBeginning) {
	          var firstPage = this.props.options.pageStartIndex || _Const2.default.PAGE_START_INDEX;
	          result = this.store.page(firstPage, sizePerPage).get();
	          this.setState({
	            data: result,
	            currPage: firstPage,
	            reset: false
	          });
	        } else {
	          var currLastPage = Math.ceil(this.store.getDataNum() / sizePerPage);
	          result = this.store.page(currLastPage, sizePerPage).get();
	          this.setState({
	            data: result,
	            currPage: currLastPage,
	            reset: false
	          });
	        }
	      } else {
	        result = this.store.get();
	        this.setState({
	          data: result,
	          reset: false
	        });
	      }

	      if (this.props.options.afterInsertRow) {
	        this.props.options.afterInsertRow(newObj);
	      }
	    }
	  }]);

	  return BootstrapTable;
	}(_react.Component);

	BootstrapTable.propTypes = {
	  keyField: _react.PropTypes.string,
	  height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  maxHeight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]),
	  remote: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]), // remote data, default is false
	  scrollTop: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  striped: _react.PropTypes.bool,
	  bordered: _react.PropTypes.bool,
	  hover: _react.PropTypes.bool,
	  condensed: _react.PropTypes.bool,
	  pagination: _react.PropTypes.bool,
	  printable: _react.PropTypes.bool,
	  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  searchPlaceholder: _react.PropTypes.string,
	  selectRow: _react.PropTypes.shape({
	    mode: _react.PropTypes.oneOf([_Const2.default.ROW_SELECT_NONE, _Const2.default.ROW_SELECT_SINGLE, _Const2.default.ROW_SELECT_MULTI]),
	    customComponent: _react.PropTypes.func,
	    bgColor: _react.PropTypes.string,
	    selected: _react.PropTypes.array,
	    onSelect: _react.PropTypes.func,
	    onSelectAll: _react.PropTypes.func,
	    clickToSelect: _react.PropTypes.bool,
	    hideSelectColumn: _react.PropTypes.bool,
	    clickToSelectAndEditCell: _react.PropTypes.bool,
	    clickToExpand: _react.PropTypes.bool,
	    showOnlySelected: _react.PropTypes.bool,
	    unselectable: _react.PropTypes.array,
	    columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	  }),
	  cellEdit: _react.PropTypes.shape({
	    mode: _react.PropTypes.string,
	    blurToSave: _react.PropTypes.bool,
	    beforeSaveCell: _react.PropTypes.func,
	    afterSaveCell: _react.PropTypes.func,
	    nonEditableRows: _react.PropTypes.func
	  }),
	  insertRow: _react.PropTypes.bool,
	  deleteRow: _react.PropTypes.bool,
	  search: _react.PropTypes.bool,
	  columnFilter: _react.PropTypes.bool,
	  trClassName: _react.PropTypes.any,
	  tableStyle: _react.PropTypes.object,
	  containerStyle: _react.PropTypes.object,
	  headerStyle: _react.PropTypes.object,
	  bodyStyle: _react.PropTypes.object,
	  containerClass: _react.PropTypes.string,
	  tableContainerClass: _react.PropTypes.string,
	  headerContainerClass: _react.PropTypes.string,
	  bodyContainerClass: _react.PropTypes.string,
	  tableHeaderClass: _react.PropTypes.string,
	  tableBodyClass: _react.PropTypes.string,
	  options: _react.PropTypes.shape({
	    clearSearch: _react.PropTypes.bool,
	    sortName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	    sortOrder: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	    defaultSortName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	    defaultSortOrder: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
	    sortIndicator: _react.PropTypes.bool,
	    afterTableComplete: _react.PropTypes.func,
	    afterDeleteRow: _react.PropTypes.func,
	    afterInsertRow: _react.PropTypes.func,
	    afterSearch: _react.PropTypes.func,
	    afterColumnFilter: _react.PropTypes.func,
	    onRowClick: _react.PropTypes.func,
	    onRowDoubleClick: _react.PropTypes.func,
	    page: _react.PropTypes.number,
	    pageStartIndex: _react.PropTypes.number,
	    paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
	    sizePerPageList: _react.PropTypes.array,
	    sizePerPage: _react.PropTypes.number,
	    paginationSize: _react.PropTypes.number,
	    paginationPosition: _react.PropTypes.oneOf([_Const2.default.PAGINATION_POS_TOP, _Const2.default.PAGINATION_POS_BOTTOM, _Const2.default.PAGINATION_POS_BOTH]),
	    hideSizePerPage: _react.PropTypes.bool,
	    hidePageListOnlyOnePage: _react.PropTypes.bool,
	    alwaysShowAllBtns: _react.PropTypes.bool,
	    withFirstAndLast: _react.PropTypes.bool,
	    onSortChange: _react.PropTypes.func,
	    onPageChange: _react.PropTypes.func,
	    onSizePerPageList: _react.PropTypes.func,
	    onFilterChange: _react2.default.PropTypes.func,
	    onSearchChange: _react2.default.PropTypes.func,
	    onAddRow: _react2.default.PropTypes.func,
	    onExportToCSV: _react2.default.PropTypes.func,
	    onCellEdit: _react2.default.PropTypes.func,
	    noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	    withoutNoDataText: _react2.default.PropTypes.bool,
	    handleConfirmDeleteRow: _react.PropTypes.func,
	    prePage: _react.PropTypes.string,
	    nextPage: _react.PropTypes.string,
	    firstPage: _react.PropTypes.string,
	    lastPage: _react.PropTypes.string,
	    prePageTitle: _react.PropTypes.string,
	    nextPageTitle: _react.PropTypes.string,
	    firstPageTitle: _react.PropTypes.string,
	    lastPageTitle: _react.PropTypes.string,
	    searchDelayTime: _react.PropTypes.number,
	    exportCSVText: _react.PropTypes.string,
	    insertText: _react.PropTypes.string,
	    deleteText: _react.PropTypes.string,
	    saveText: _react.PropTypes.string,
	    closeText: _react.PropTypes.string,
	    ignoreEditable: _react.PropTypes.bool,
	    defaultSearch: _react.PropTypes.string,
	    insertModalHeader: _react.PropTypes.func,
	    insertModalBody: _react.PropTypes.func,
	    insertModalFooter: _react.PropTypes.func,
	    insertModal: _react.PropTypes.func,
	    insertBtn: _react.PropTypes.func,
	    deleteBtn: _react.PropTypes.func,
	    showSelectedOnlyBtn: _react.PropTypes.func,
	    exportCSVBtn: _react.PropTypes.func,
	    clearSearchBtn: _react.PropTypes.func,
	    searchField: _react.PropTypes.func,
	    searchPanel: _react.PropTypes.func,
	    btnGroup: _react.PropTypes.func,
	    toolBar: _react.PropTypes.func,
	    sizePerPageDropDown: _react.PropTypes.func,
	    paginationPanel: _react.PropTypes.func,
	    searchPosition: _react.PropTypes.string,
	    expandRowBgColor: _react.PropTypes.string,
	    expandBy: _react.PropTypes.string,
	    expanding: _react.PropTypes.array,
	    beforeShowError: _react.PropTypes.func,
	    printToolBar: _react.PropTypes.bool
	  }),
	  fetchInfo: _react.PropTypes.shape({
	    dataTotalSize: _react.PropTypes.number
	  }),
	  exportCSV: _react.PropTypes.bool,
	  csvFileName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	  ignoreSinglePage: _react.PropTypes.bool,
	  expandableRow: _react.PropTypes.func,
	  expandComponent: _react.PropTypes.func,
	  expandColumnOptions: _react.PropTypes.shape({
	    columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    expandColumnVisible: _react.PropTypes.bool,
	    expandColumnComponent: _react.PropTypes.func,
	    expandColumnBeforeSelectColumn: _react.PropTypes.bool
	  }),
	  draggableRow: _react.PropTypes.bool,
	  onDroppedRow: _react.PropTypes.func
	};
	BootstrapTable.defaultProps = {
	  scrollTop: undefined,
	  expandComponent: undefined,
	  expandableRow: undefined,
	  expandColumnOptions: {
	    expandColumnVisible: false,
	    expandColumnComponent: undefined,
	    expandColumnBeforeSelectColumn: true
	  },
	  height: '100%',
	  maxHeight: undefined,
	  striped: false,
	  bordered: true,
	  hover: false,
	  condensed: false,
	  pagination: false,
	  printable: false,
	  keyBoardNav: false,
	  searchPlaceholder: undefined,
	  selectRow: {
	    mode: _Const2.default.ROW_SELECT_NONE,
	    bgColor: _Const2.default.ROW_SELECT_BG_COLOR,
	    selected: [],
	    onSelect: undefined,
	    onSelectAll: undefined,
	    clickToSelect: false,
	    hideSelectColumn: false,
	    clickToSelectAndEditCell: false,
	    clickToExpand: false,
	    showOnlySelected: false,
	    unselectable: [],
	    customComponent: undefined
	  },
	  cellEdit: {
	    mode: _Const2.default.CELL_EDIT_NONE,
	    blurToSave: false,
	    beforeSaveCell: undefined,
	    afterSaveCell: undefined,
	    nonEditableRows: undefined
	  },
	  insertRow: false,
	  deleteRow: false,
	  search: false,
	  multiColumnSearch: false,
	  multiColumnSort: 1,
	  columnFilter: false,
	  trClassName: '',
	  tableStyle: undefined,
	  containerStyle: undefined,
	  headerStyle: undefined,
	  bodyStyle: undefined,
	  containerClass: null,
	  tableContainerClass: null,
	  headerContainerClass: null,
	  bodyContainerClass: null,
	  tableHeaderClass: null,
	  tableBodyClass: null,
	  options: {
	    clearSearch: false,
	    sortName: undefined,
	    sortOrder: undefined,
	    defaultSortName: undefined,
	    defaultSortOrder: undefined,
	    sortIndicator: true,
	    afterTableComplete: undefined,
	    afterDeleteRow: undefined,
	    afterInsertRow: undefined,
	    afterSearch: undefined,
	    afterColumnFilter: undefined,
	    onRowClick: undefined,
	    onRowDoubleClick: undefined,
	    onMouseLeave: undefined,
	    onMouseEnter: undefined,
	    onRowMouseOut: undefined,
	    onRowMouseOver: undefined,
	    page: undefined,
	    paginationShowsTotal: false,
	    sizePerPageList: _Const2.default.SIZE_PER_PAGE_LIST,
	    sizePerPage: undefined,
	    paginationSize: _Const2.default.PAGINATION_SIZE,
	    paginationPosition: _Const2.default.PAGINATION_POS_BOTTOM,
	    hideSizePerPage: false,
	    hidePageListOnlyOnePage: false,
	    alwaysShowAllBtns: false,
	    withFirstAndLast: true,
	    onSizePerPageList: undefined,
	    noDataText: undefined,
	    withoutNoDataText: false,
	    handleConfirmDeleteRow: undefined,
	    prePage: _Const2.default.PRE_PAGE,
	    nextPage: _Const2.default.NEXT_PAGE,
	    firstPage: _Const2.default.FIRST_PAGE,
	    lastPage: _Const2.default.LAST_PAGE,
	    prePageTitle: _Const2.default.PRE_PAGE_TITLE,
	    nextPageTitle: _Const2.default.NEXT_PAGE_TITLE,
	    firstPageTitle: _Const2.default.FIRST_PAGE_TITLE,
	    lastPageTitle: _Const2.default.LAST_PAGE_TITLE,
	    pageStartIndex: undefined,
	    searchDelayTime: undefined,
	    exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
	    insertText: _Const2.default.INSERT_BTN_TEXT,
	    deleteText: _Const2.default.DELETE_BTN_TEXT,
	    saveText: _Const2.default.SAVE_BTN_TEXT,
	    closeText: _Const2.default.CLOSE_BTN_TEXT,
	    ignoreEditable: false,
	    defaultSearch: '',
	    insertModalHeader: undefined,
	    insertModalBody: undefined,
	    insertModalFooter: undefined,
	    insertModal: undefined,
	    insertBtn: undefined,
	    deleteBtn: undefined,
	    showSelectedOnlyBtn: undefined,
	    exportCSVBtn: undefined,
	    clearSearchBtn: undefined,
	    searchField: undefined,
	    searchPanel: undefined,
	    btnGroup: undefined,
	    toolBar: undefined,
	    sizePerPageDropDown: undefined,
	    paginationPanel: undefined,
	    searchPosition: 'right',
	    expandRowBgColor: undefined,
	    expandBy: _Const2.default.EXPAND_BY_ROW,
	    expanding: [],
	    beforeShowError: undefined,
	    printToolBar: true
	  },
	  fetchInfo: {
	    dataTotalSize: 0
	  },
	  exportCSV: false,
	  csvFileName: 'spreadsheet.csv',
	  ignoreSinglePage: false
	};

	var _default = BootstrapTable;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(BootstrapTable, 'BootstrapTable', '/Users/garettarrowood/Power/react-bootstrap-table/src/BootstrapTable.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/BootstrapTable.js');
	}();

	;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CONST_VAR = {
	  SORT_DESC: 'desc',
	  SORT_ASC: 'asc',
	  SIZE_PER_PAGE: 10,
	  NEXT_PAGE: '>',
	  NEXT_PAGE_TITLE: 'next page',
	  LAST_PAGE: '>>',
	  LAST_PAGE_TITLE: 'last page',
	  PRE_PAGE: '<',
	  PRE_PAGE_TITLE: 'previous page',
	  FIRST_PAGE: '<<',
	  FIRST_PAGE_TITLE: 'first page',
	  PAGE_START_INDEX: 1,
	  ROW_SELECT_BG_COLOR: '',
	  ROW_SELECT_NONE: 'none',
	  ROW_SELECT_SINGLE: 'radio',
	  ROW_SELECT_MULTI: 'checkbox',
	  CELL_EDIT_NONE: 'none',
	  CELL_EDIT_CLICK: 'click',
	  CELL_EDIT_DBCLICK: 'dbclick',
	  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
	  PAGINATION_SIZE: 5,
	  PAGINATION_POS_TOP: 'top',
	  PAGINATION_POS_BOTTOM: 'bottom',
	  PAGINATION_POS_BOTH: 'both',
	  NO_DATA_TEXT: 'There is no data to display',
	  SHOW_ONLY_SELECT: 'Show Selected Only',
	  SHOW_ALL: 'Show All',
	  EXPORT_CSV_TEXT: 'Export to CSV',
	  INSERT_BTN_TEXT: 'New',
	  DELETE_BTN_TEXT: 'Delete',
	  SAVE_BTN_TEXT: 'Save',
	  CLOSE_BTN_TEXT: 'Close',
	  FILTER_DELAY: 500,
	  SCROLL_TOP: 'Top',
	  SCROLL_BOTTOM: 'Bottom',
	  FILTER_TYPE: {
	    TEXT: 'TextFilter',
	    REGEX: 'RegexFilter',
	    SELECT: 'SelectFilter',
	    NUMBER: 'NumberFilter',
	    DATE: 'DateFilter',
	    CUSTOM: 'CustomFilter'
	  },
	  FILTER_COND_EQ: 'eq',
	  FILTER_COND_LIKE: 'like',
	  EXPAND_BY_ROW: 'row',
	  EXPAND_BY_COL: 'column',
	  CANCEL_TOASTR: 'Pressed ESC can cancel',
	  REMOTE_SORT: 'sort',
	  REMOTE_PAGE: 'pagination',
	  REMOTE_CELL_EDIT: 'cellEdit',
	  REMOTE_INSERT_ROW: 'insertRow',
	  REMOTE_DROP_ROW: 'dropRow',
	  REMOTE_FILTER: 'filter',
	  REMOTE_SEARCH: 'search',
	  REMOTE_EXPORT_CSV: 'exportCSV'
	};

	CONST_VAR.REMOTE = {};
	CONST_VAR.REMOTE[CONST_VAR.REMOTE_SORT] = false;
	CONST_VAR.REMOTE[CONST_VAR.REMOTE_PAGE] = false;
	CONST_VAR.REMOTE[CONST_VAR.REMOTE_CELL_EDIT] = false;
	CONST_VAR.REMOTE[CONST_VAR.REMOTE_INSERT_ROW] = false;
	CONST_VAR.REMOTE[CONST_VAR.REMOTE_DROP_ROW] = false;
	CONST_VAR.REMOTE[CONST_VAR.REMOTE_FILTER] = false;
	CONST_VAR.REMOTE[CONST_VAR.REMOTE_SEARCH] = false;
	CONST_VAR.REMOTE[CONST_VAR.REMOTE_EXPORT_CSV] = false;

	var _default = CONST_VAR;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(CONST_VAR, 'CONST_VAR', '/Users/garettarrowood/Power/react-bootstrap-table/src/Const.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/Const.js');
	}();

	;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _SelectRowHeaderColumn = __webpack_require__(7);

	var _SelectRowHeaderColumn2 = _interopRequireDefault(_SelectRowHeaderColumn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Checkbox = function (_Component) {
	  _inherits(Checkbox, _Component);

	  function Checkbox() {
	    _classCallCheck(this, Checkbox);

	    return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
	  }

	  _createClass(Checkbox, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.update(this.props.checked);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      this.update(props.checked);
	    }
	  }, {
	    key: 'update',
	    value: function update(checked) {
	      _reactDom2.default.findDOMNode(this).indeterminate = checked === 'indeterminate';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', { className: 'react-bs-select-all',
	        type: 'checkbox',
	        checked: this.props.checked,
	        onChange: this.props.onChange });
	    }
	  }]);

	  return Checkbox;
	}(_react.Component);

	function getSortOrder(sortList, field, enableSort) {
	  if (!enableSort) return undefined;
	  var result = sortList.filter(function (sortObj) {
	    return sortObj.sortField === field;
	  });
	  if (result.length > 0) {
	    return result[0].order;
	  } else {
	    return undefined;
	  }
	}

	var TableHeader = function (_Component2) {
	  _inherits(TableHeader, _Component2);

	  function TableHeader() {
	    var _ref;

	    var _temp, _this2, _ret;

	    _classCallCheck(this, TableHeader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).call.apply(_ref, [this].concat(args))), _this2), _this2.getHeaderColGrouop = function () {
	      var _this3;

	      return (_this3 = _this2).__getHeaderColGrouop__REACT_HOT_LOADER__.apply(_this3, arguments);
	    }, _temp), _possibleConstructorReturn(_this2, _ret);
	  }

	  _createClass(TableHeader, [{
	    key: 'render',
	    value: function render() {
	      var containerClasses = (0, _classnames2.default)('react-bs-container-header', 'table-header-wrapper', this.props.headerContainerClass);
	      var tableClasses = (0, _classnames2.default)('table', 'table-hover', {
	        'table-bordered': this.props.bordered,
	        'table-condensed': this.props.condensed
	      }, this.props.tableHeaderClass);

	      var rowCount = Math.max.apply(Math, _toConsumableArray(_react2.default.Children.map(this.props.children, function (elm) {
	        return elm.props.row ? Number(elm.props.row) : 0;
	      })));

	      var rows = [];
	      var rowKey = 0;

	      rows[0] = [];
	      rows[0].push([this.props.expandColumnVisible && this.props.expandColumnBeforeSelectColumn && _react2.default.createElement(
	        'th',
	        { className: 'react-bs-table-expand-cell' },
	        ' '
	      )], [this.renderSelectRowHeader(rowCount + 1, rowKey++)], [this.props.expandColumnVisible && !this.props.expandColumnBeforeSelectColumn && _react2.default.createElement(
	        'th',
	        { className: 'react-bs-table-expand-cell' },
	        ' '
	      )]);
	      var _props = this.props,
	          sortIndicator = _props.sortIndicator,
	          sortList = _props.sortList,
	          onSort = _props.onSort,
	          reset = _props.reset;


	      _react2.default.Children.forEach(this.props.children, function (elm) {
	        var _elm$props = elm.props,
	            dataField = _elm$props.dataField,
	            dataSort = _elm$props.dataSort;

	        var sort = getSortOrder(sortList, dataField, dataSort);
	        var rowIndex = elm.props.row ? Number(elm.props.row) : 0;
	        var rowSpan = elm.props.rowSpan ? Number(elm.props.rowSpan) : 1;
	        if (rows[rowIndex] === undefined) {
	          rows[rowIndex] = [];
	        }
	        if (rowSpan + rowIndex === rowCount + 1) {
	          rows[rowIndex].push(_react2.default.cloneElement(elm, { reset: reset, key: rowKey++, onSort: onSort, sort: sort, sortIndicator: sortIndicator, isOnlyHead: false }));
	        } else {
	          rows[rowIndex].push(_react2.default.cloneElement(elm, { key: rowKey++, isOnlyHead: true }));
	        }
	      });

	      var trs = rows.map(function (row, indexRow) {
	        return _react2.default.createElement(
	          'tr',
	          { key: indexRow },
	          row
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { ref: 'container', className: containerClasses, style: this.props.style },
	        _react2.default.createElement(
	          'table',
	          { className: tableClasses },
	          _react2.default.cloneElement(this.props.colGroups, { ref: 'headerGrp' }),
	          _react2.default.createElement(
	            'thead',
	            { ref: 'header' },
	            trs
	          )
	        )
	      );
	    }
	  }, {
	    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
	    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
	      return this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
	    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
	      return this.refs.headerGrp.childNodes;
	    }
	  }, {
	    key: 'renderSelectRowHeader',
	    value: function renderSelectRowHeader(rowCount, rowKey) {
	      if (this.props.hideSelectColumn) {
	        return null;
	      } else if (this.props.customComponent) {
	        var CustomComponent = this.props.customComponent;
	        return _react2.default.createElement(
	          _SelectRowHeaderColumn2.default,
	          { key: rowKey, rowCount: rowCount },
	          _react2.default.createElement(CustomComponent, { type: 'checkbox', checked: this.props.isSelectAll,
	            indeterminate: this.props.isSelectAll === 'indeterminate', disabled: false,
	            onChange: this.props.onSelectAllRow, rowIndex: 'Header' })
	        );
	      } else if (this.props.rowSelectType === _Const2.default.ROW_SELECT_SINGLE) {
	        return _react2.default.createElement(_SelectRowHeaderColumn2.default, { key: rowKey, rowCount: rowCount });
	      } else if (this.props.rowSelectType === _Const2.default.ROW_SELECT_MULTI) {
	        return _react2.default.createElement(
	          _SelectRowHeaderColumn2.default,
	          { key: rowKey, rowCount: rowCount },
	          _react2.default.createElement(Checkbox, {
	            onChange: this.props.onSelectAllRow,
	            checked: this.props.isSelectAll })
	        );
	      } else {
	        return null;
	      }
	    }
	  }]);

	  return TableHeader;
	}(_react.Component);

	TableHeader.propTypes = {
	  headerContainerClass: _react.PropTypes.string,
	  tableHeaderClass: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  rowSelectType: _react.PropTypes.string,
	  onSort: _react.PropTypes.func,
	  onSelectAllRow: _react.PropTypes.func,
	  sortList: _react.PropTypes.array,
	  hideSelectColumn: _react.PropTypes.bool,
	  bordered: _react.PropTypes.bool,
	  condensed: _react.PropTypes.bool,
	  isFiltered: _react.PropTypes.bool,
	  isSelectAll: _react.PropTypes.oneOf([true, 'indeterminate', false]),
	  sortIndicator: _react.PropTypes.bool,
	  customComponent: _react.PropTypes.func,
	  colGroups: _react.PropTypes.element,
	  reset: _react.PropTypes.bool,
	  expandColumnVisible: _react.PropTypes.bool,
	  expandColumnComponent: _react.PropTypes.func,
	  expandColumnBeforeSelectColumn: _react.PropTypes.bool
	};

	var _default = TableHeader;
	exports.default = _default;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Checkbox, 'Checkbox', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableHeader.js');

	  __REACT_HOT_LOADER__.register(getSortOrder, 'getSortOrder', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableHeader.js');

	  __REACT_HOT_LOADER__.register(TableHeader, 'TableHeader', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableHeader.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableHeader.js');
	}();

	;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SelectRowHeaderColumn = function (_Component) {
	  _inherits(SelectRowHeaderColumn, _Component);

	  function SelectRowHeaderColumn() {
	    _classCallCheck(this, SelectRowHeaderColumn);

	    return _possibleConstructorReturn(this, (SelectRowHeaderColumn.__proto__ || Object.getPrototypeOf(SelectRowHeaderColumn)).apply(this, arguments));
	  }

	  _createClass(SelectRowHeaderColumn, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'th',
	        { rowSpan: this.props.rowCount, style: { textAlign: 'center' },
	          'data-is-only-head': false },
	        this.props.children
	      );
	    }
	  }]);

	  return SelectRowHeaderColumn;
	}(_react.Component);

	SelectRowHeaderColumn.propTypes = {
	  children: _react.PropTypes.node,
	  rowCount: _react.PropTypes.number
	};
	var _default = SelectRowHeaderColumn;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(SelectRowHeaderColumn, 'SelectRowHeaderColumn', '/Users/garettarrowood/Power/react-bootstrap-table/src/SelectRowHeaderColumn.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/SelectRowHeaderColumn.js');
	}();

	;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(9);

	var _util2 = _interopRequireDefault(_util);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _TableRow = __webpack_require__(10);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(159);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableEditColumn = __webpack_require__(160);

	var _TableEditColumn2 = _interopRequireDefault(_TableEditColumn);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ExpandComponent = __webpack_require__(162);

	var _ExpandComponent2 = _interopRequireDefault(_ExpandComponent);

	var _reactDnd = __webpack_require__(11);

	var _reactDndHtml5Backend = __webpack_require__(163);

	var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isFun = function isFun(obj) {
	  return obj && typeof obj === 'function';
	};

	var TableBody = (_dec = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default), _dec(_class = function (_Component) {
	  _inherits(TableBody, _Component);

	  function TableBody(props) {
	    _classCallCheck(this, TableBody);

	    var _this = _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).call(this, props));

	    _this.handleCellKeyDown = function () {
	      return _this.__handleCellKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleRowMouseOut = function () {
	      return _this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleRowMouseOver = function () {
	      return _this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleRowClick = function () {
	      return _this.__handleRowClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleRowDoubleClick = function () {
	      return _this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleSelectRow = function () {
	      return _this.__handleSelectRow__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleSelectRowColumChange = function () {
	      return _this.__handleSelectRowColumChange__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleClickCell = function () {
	      return _this.__handleClickCell__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleEditCell = function () {
	      return _this.__handleEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleCompleteEditCell = function () {
	      return _this.__handleCompleteEditCell__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleClickonSelectColumn = function () {
	      return _this.__handleClickonSelectColumn__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.getHeaderColGrouop = function () {
	      return _this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.state = {
	      currEditCell: null
	    };
	    return _this;
	  }

	  _createClass(TableBody, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          cellEdit = _props.cellEdit,
	          beforeShowError = _props.beforeShowError,
	          x = _props.x,
	          y = _props.y,
	          keyBoardNav = _props.keyBoardNav;

	      var tableClasses = (0, _classnames2.default)('table', {
	        'table-striped': this.props.striped,
	        'table-bordered': this.props.bordered,
	        'table-hover': this.props.hover,
	        'table-condensed': this.props.condensed
	      }, this.props.tableBodyClass);

	      var noneditableRows = cellEdit.nonEditableRows && cellEdit.nonEditableRows() || [];
	      var unselectable = this.props.selectRow.unselectable || [];
	      var isSelectRowDefined = this._isSelectRowDefined();
	      var tableHeader = _util2.default.renderColGroup(this.props.columns, this.props.selectRow, this.props.expandColumnOptions);
	      var inputType = this.props.selectRow.mode === _Const2.default.ROW_SELECT_SINGLE ? 'radio' : 'checkbox';
	      var CustomComponent = this.props.selectRow.customComponent;
	      var enableKeyBoardNav = keyBoardNav === true || (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object';
	      var customEditAndNavStyle = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.customStyleOnEditCell : null;
	      var customNavStyle = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.customStyle : null;
	      var ExpandColumnCustomComponent = this.props.expandColumnOptions.expandColumnComponent;
	      var expandColSpan = this.props.columns.filter(function (col) {
	        return !col.hidden;
	      }).length;
	      if (isSelectRowDefined && !this.props.selectRow.hideSelectColumn) {
	        expandColSpan += 1;
	      }
	      var tabIndex = 1;
	      if (this.props.expandColumnOptions.expandColumnVisible) {
	        expandColSpan += 1;
	      }

	      var tableRows = this.props.data.map(function (data, r) {
	        var tableColumns = this.props.columns.map(function (column, i) {
	          var fieldValue = data[column.name];
	          var isFocusCell = r === y && i === x;
	          if (column.name !== this.props.keyField && // Key field can't be edit
	          column.editable && // column is editable? default is true, user can set it false
	          this.state.currEditCell !== null && this.state.currEditCell.rid === r && this.state.currEditCell.cid === i && noneditableRows.indexOf(data[this.props.keyField]) === -1) {
	            var editable = column.editable;
	            var format = column.format ? function (value) {
	              return column.format(value, data, column.formatExtraData, r).replace(/<.*?>/g, '');
	            } : false;
	            if (isFun(column.editable)) {
	              editable = column.editable(fieldValue, data, r, i);
	            }

	            return _react2.default.createElement(_TableEditColumn2.default, {
	              completeEdit: this.handleCompleteEditCell
	              // add by bluespring for column editor customize
	              , editable: editable,
	              customEditor: column.customEditor,
	              format: column.format ? format : false,
	              key: i,
	              blurToSave: cellEdit.blurToSave,
	              onTab: this.handleEditCell,
	              rowIndex: r,
	              colIndex: i,
	              row: data,
	              fieldValue: fieldValue,
	              className: column.editClassName,
	              invalidColumnClassName: column.invalidEditColumnClassName,
	              beforeShowError: beforeShowError,
	              isFocus: isFocusCell,
	              customStyleWithNav: customEditAndNavStyle });
	          } else {
	            // add by bluespring for className customize
	            var columnChild = fieldValue && fieldValue.toString();
	            var columnTitle = null;
	            var tdClassName = column.className;
	            if (isFun(column.className)) {
	              tdClassName = column.className(fieldValue, data, r, i);
	            }

	            if (typeof column.format !== 'undefined') {
	              var formattedValue = column.format(fieldValue, data, column.formatExtraData, r);
	              if (!_react2.default.isValidElement(formattedValue)) {
	                columnChild = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: formattedValue } });
	              } else {
	                columnChild = formattedValue;
	                columnTitle = column.columnTitle && formattedValue ? formattedValue.toString() : null;
	              }
	            } else {
	              columnTitle = column.columnTitle && fieldValue ? fieldValue.toString() : null;
	            }
	            return _react2.default.createElement(
	              _TableColumn2.default,
	              { key: i,
	                rIndex: r,
	                dragHandle: column.dragHandle,
	                dataAlign: column.align,
	                className: tdClassName,
	                columnTitle: columnTitle,
	                cellEdit: cellEdit,
	                hidden: column.hidden,
	                onEdit: this.handleEditCell,
	                width: column.width,
	                onClick: this.handleClickCell,
	                attrs: column.attrs,
	                style: column.style,
	                tabIndex: tabIndex++ + '',
	                isFocus: isFocusCell,
	                keyBoardNav: enableKeyBoardNav,
	                onKeyDown: this.handleCellKeyDown,
	                customNavStyle: customNavStyle,
	                onDroppedRow: this.props.onDroppedRow,
	                row: data },
	              columnChild
	            );
	          }
	        }, this);
	        var key = data[this.props.keyField];
	        var disable = unselectable.indexOf(key) !== -1;
	        var selected = this.props.selectedRowKeys.indexOf(key) !== -1;
	        var selectRowColumn = isSelectRowDefined && !this.props.selectRow.hideSelectColumn ? this.renderSelectRowColumn(selected, inputType, disable, CustomComponent, r, data) : null;
	        var expandedRowColumn = this.renderExpandRowColumn(this.props.expandableRow && this.props.expandableRow(data), this.props.expanding.indexOf(key) > -1, ExpandColumnCustomComponent, r, data);
	        // add by bluespring for className customize
	        var trClassName = this.props.trClassName;
	        if (isFun(this.props.trClassName)) {
	          trClassName = this.props.trClassName(data, r);
	        }
	        var result = [_react2.default.createElement(
	          _TableRow2.default,
	          { isSelected: selected, key: key, className: trClassName,
	            index: r,
	            rIndex: r,
	            selectRow: isSelectRowDefined ? this.props.selectRow : undefined,
	            enableCellEdit: cellEdit.mode !== _Const2.default.CELL_EDIT_NONE,
	            onRowClick: this.handleRowClick,
	            onRowDoubleClick: this.handleRowDoubleClick,
	            onRowMouseOver: this.handleRowMouseOver,
	            onRowMouseOut: this.handleRowMouseOut,
	            onSelectRow: this.handleSelectRow,
	            onExpandRow: this.handleClickCell,
	            unselectableRow: disable,
	            dragRow: this.props.handleDragRow },
	          this.props.expandColumnOptions.expandColumnVisible && this.props.expandColumnOptions.expandColumnBeforeSelectColumn && expandedRowColumn,
	          selectRowColumn,
	          this.props.expandColumnOptions.expandColumnVisible && !this.props.expandColumnOptions.expandColumnBeforeSelectColumn && expandedRowColumn,
	          tableColumns
	        )];

	        if (this.props.expandableRow && this.props.expandableRow(data)) {
	          result.push(_react2.default.createElement(
	            _ExpandComponent2.default,
	            {
	              key: key + '-expand',
	              className: trClassName,
	              bgColor: this.props.expandRowBgColor || this.props.selectRow.bgColor || undefined,
	              hidden: !(this.props.expanding.indexOf(key) > -1),
	              colSpan: expandColSpan,
	              width: "100%" },
	            this.props.expandComponent(data)
	          ));
	        }
	        return result;
	      }, this);

	      if (tableRows.length === 0 && !this.props.withoutNoDataText) {
	        tableRows = [_react2.default.createElement(
	          _TableRow2.default,
	          { key: '##table-empty##' },
	          _react2.default.createElement(
	            'td',
	            { 'data-toggle': 'collapse',
	              colSpan: this.props.columns.length + (isSelectRowDefined ? 1 : 0),
	              className: 'react-bs-table-no-data' },
	            this.props.noDataText || _Const2.default.NO_DATA_TEXT
	          )
	        )];
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: 'container',
	          className: (0, _classnames2.default)('react-bs-container-body', this.props.bodyContainerClass),
	          style: this.props.style },
	        _react2.default.createElement(
	          'table',
	          { className: tableClasses },
	          _react2.default.cloneElement(tableHeader, { ref: 'header' }),
	          _react2.default.createElement(
	            'tbody',
	            { ref: 'tbody' },
	            tableRows
	          )
	        )
	      );
	    }
	  }, {
	    key: '__handleCellKeyDown__REACT_HOT_LOADER__',
	    value: function __handleCellKeyDown__REACT_HOT_LOADER__() {
	      return this.__handleCellKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellKeyDown__REACT_HOT_LOADER__',
	    value: function __handleCellKeyDown__REACT_HOT_LOADER__() {
	      return this.__handleCellKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellKeyDown__REACT_HOT_LOADER__',
	    value: function __handleCellKeyDown__REACT_HOT_LOADER__() {
	      return this.__handleCellKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellKeyDown__REACT_HOT_LOADER__',
	    value: function __handleCellKeyDown__REACT_HOT_LOADER__(e, lastEditCell) {
	      e.preventDefault();
	      var _props2 = this.props,
	          keyBoardNav = _props2.keyBoardNav,
	          onNavigateCell = _props2.onNavigateCell,
	          cellEdit = _props2.cellEdit;

	      var offset = void 0;
	      if (e.keyCode === 37) {
	        offset = { x: -1, y: 0 };
	      } else if (e.keyCode === 38) {
	        offset = { x: 0, y: -1 };
	      } else if (e.keyCode === 39 || e.keyCode === 9) {
	        offset = { x: 1, y: 0 };
	        if (e.keyCode === 9 && lastEditCell) {
	          offset = _extends({}, offset, {
	            lastEditCell: lastEditCell
	          });
	        }
	      } else if (e.keyCode === 40) {
	        offset = { x: 0, y: 1 };
	      } else if (e.keyCode === 13) {
	        var enterToEdit = (typeof keyBoardNav === 'undefined' ? 'undefined' : _typeof(keyBoardNav)) === 'object' ? keyBoardNav.enterToEdit : false;
	        if (cellEdit && enterToEdit) {
	          this.handleEditCell(e.target.parentElement.rowIndex + 1, e.currentTarget.cellIndex, '', e);
	        }
	      }
	      if (offset && keyBoardNav) {
	        onNavigateCell(offset);
	      }
	    }
	  }, {
	    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOut__REACT_HOT_LOADER__() {
	      return this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOut__REACT_HOT_LOADER__() {
	      return this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOut__REACT_HOT_LOADER__() {
	      return this.__handleRowMouseOut__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowMouseOut__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOut__REACT_HOT_LOADER__(rowIndex, event) {
	      var targetRow = this.props.data[rowIndex];
	      this.props.onRowMouseOut(targetRow, event);
	    }
	  }, {
	    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOver__REACT_HOT_LOADER__() {
	      return this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOver__REACT_HOT_LOADER__() {
	      return this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOver__REACT_HOT_LOADER__() {
	      return this.__handleRowMouseOver__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowMouseOver__REACT_HOT_LOADER__',
	    value: function __handleRowMouseOver__REACT_HOT_LOADER__(rowIndex, event) {
	      var targetRow = this.props.data[rowIndex];
	      this.props.onRowMouseOver(targetRow, event);
	    }
	  }, {
	    key: '__handleRowClick__REACT_HOT_LOADER__',
	    value: function __handleRowClick__REACT_HOT_LOADER__() {
	      return this.__handleRowClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowClick__REACT_HOT_LOADER__',
	    value: function __handleRowClick__REACT_HOT_LOADER__() {
	      return this.__handleRowClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowClick__REACT_HOT_LOADER__',
	    value: function __handleRowClick__REACT_HOT_LOADER__() {
	      return this.__handleRowClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowClick__REACT_HOT_LOADER__',
	    value: function __handleRowClick__REACT_HOT_LOADER__(rowIndex, cellIndex) {
	      var onRowClick = this.props.onRowClick;

	      if (this._isSelectRowDefined()) cellIndex--;
	      if (this._isExpandColumnVisible()) cellIndex--;
	      onRowClick(this.props.data[rowIndex - 1], rowIndex - 1, cellIndex);
	    }
	  }, {
	    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
	    value: function __handleRowDoubleClick__REACT_HOT_LOADER__() {
	      return this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
	    value: function __handleRowDoubleClick__REACT_HOT_LOADER__() {
	      return this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
	    value: function __handleRowDoubleClick__REACT_HOT_LOADER__() {
	      return this.__handleRowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleRowDoubleClick__REACT_HOT_LOADER__',
	    value: function __handleRowDoubleClick__REACT_HOT_LOADER__(rowIndex) {
	      var onRowDoubleClick = this.props.onRowDoubleClick;

	      var targetRow = this.props.data[rowIndex];
	      onRowDoubleClick(targetRow);
	    }
	  }, {
	    key: '__handleSelectRow__REACT_HOT_LOADER__',
	    value: function __handleSelectRow__REACT_HOT_LOADER__() {
	      return this.__handleSelectRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSelectRow__REACT_HOT_LOADER__',
	    value: function __handleSelectRow__REACT_HOT_LOADER__() {
	      return this.__handleSelectRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSelectRow__REACT_HOT_LOADER__',
	    value: function __handleSelectRow__REACT_HOT_LOADER__() {
	      return this.__handleSelectRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSelectRow__REACT_HOT_LOADER__',
	    value: function __handleSelectRow__REACT_HOT_LOADER__(rowIndex, isSelected, e) {
	      var selectedRow = void 0;
	      var _props3 = this.props,
	          data = _props3.data,
	          onSelectRow = _props3.onSelectRow;

	      data.forEach(function (row, i) {
	        if (i === rowIndex - 1) {
	          selectedRow = row;
	          return false;
	        }
	      });
	      onSelectRow(selectedRow, isSelected, e);
	    }
	  }, {
	    key: '__handleSelectRowColumChange__REACT_HOT_LOADER__',
	    value: function __handleSelectRowColumChange__REACT_HOT_LOADER__() {
	      return this.__handleSelectRowColumChange__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSelectRowColumChange__REACT_HOT_LOADER__',
	    value: function __handleSelectRowColumChange__REACT_HOT_LOADER__() {
	      return this.__handleSelectRowColumChange__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSelectRowColumChange__REACT_HOT_LOADER__',
	    value: function __handleSelectRowColumChange__REACT_HOT_LOADER__() {
	      return this.__handleSelectRowColumChange__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSelectRowColumChange__REACT_HOT_LOADER__',
	    value: function __handleSelectRowColumChange__REACT_HOT_LOADER__(e, rowIndex) {
	      if (!this.props.selectRow.clickToSelect || !this.props.selectRow.clickToSelectAndEditCell) {
	        this.handleSelectRow(rowIndex + 1, e.currentTarget.checked, e);
	      }
	    }
	  }, {
	    key: '__handleClickCell__REACT_HOT_LOADER__',
	    value: function __handleClickCell__REACT_HOT_LOADER__() {
	      return this.__handleClickCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleClickCell__REACT_HOT_LOADER__',
	    value: function __handleClickCell__REACT_HOT_LOADER__() {
	      return this.__handleClickCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleClickCell__REACT_HOT_LOADER__',
	    value: function __handleClickCell__REACT_HOT_LOADER__() {
	      return this.__handleClickCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleClickCell__REACT_HOT_LOADER__',
	    value: function __handleClickCell__REACT_HOT_LOADER__(rowIndex) {
	      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
	      var _props4 = this.props,
	          columns = _props4.columns,
	          keyField = _props4.keyField,
	          expandBy = _props4.expandBy,
	          expandableRow = _props4.expandableRow,
	          clickToExpand = _props4.selectRow.clickToExpand;

	      var selectRowAndExpand = this._isSelectRowDefined() && !clickToExpand ? false : true;
	      columnIndex = this._isSelectRowDefined() ? columnIndex - 1 : columnIndex;
	      columnIndex = this._isExpandColumnVisible() ? columnIndex - 1 : columnIndex;
	      if (expandableRow && selectRowAndExpand && (expandBy === _Const2.default.EXPAND_BY_ROW ||
	      /* Below will allow expanding trigger by clicking on selection column
	      if configure as expanding by column */
	      expandBy === _Const2.default.EXPAND_BY_COL && columnIndex < 0 || expandBy === _Const2.default.EXPAND_BY_COL && columns[columnIndex].expandable)) {
	        var rowKey = this.props.data[rowIndex - 1][keyField];
	        var expanding = this.props.expanding;
	        if (expanding.indexOf(rowKey) > -1) {
	          expanding = expanding.filter(function (k) {
	            return k !== rowKey;
	          });
	        } else {
	          expanding.push(rowKey);
	        }
	        this.props.onExpand(expanding);
	      }
	    }
	  }, {
	    key: '__handleEditCell__REACT_HOT_LOADER__',
	    value: function __handleEditCell__REACT_HOT_LOADER__() {
	      return this.__handleEditCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleEditCell__REACT_HOT_LOADER__',
	    value: function __handleEditCell__REACT_HOT_LOADER__() {
	      return this.__handleEditCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleEditCell__REACT_HOT_LOADER__',
	    value: function __handleEditCell__REACT_HOT_LOADER__() {
	      return this.__handleEditCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleEditCell__REACT_HOT_LOADER__',
	    value: function __handleEditCell__REACT_HOT_LOADER__(rowIndex, columnIndex, action, e) {
	      var defineSelectRow = this._isSelectRowDefined();
	      var expandColumnVisible = this._isExpandColumnVisible();
	      if (defineSelectRow) {
	        columnIndex--;
	        if (this.props.selectRow.hideSelectColumn) columnIndex++;
	      }
	      if (expandColumnVisible) {
	        columnIndex--;
	      }
	      rowIndex--;

	      if (action === 'tab') {
	        if (defineSelectRow) columnIndex++;
	        if (expandColumnVisible) columnIndex++;
	        this.handleCompleteEditCell(e.target.value, rowIndex, columnIndex - 1);
	        if (columnIndex >= this.props.columns.length) {
	          rowIndex = rowIndex + 1;
	          columnIndex = 1;
	          this.handleCellKeyDown(e, true);
	        } else {
	          this.handleCellKeyDown(e);
	        }
	      }

	      var stateObj = {
	        currEditCell: {
	          rid: rowIndex,
	          cid: columnIndex
	        }
	      };

	      if (this.props.selectRow.clickToSelectAndEditCell && this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_DBCLICK) {
	        var selected = this.props.selectedRowKeys.indexOf(this.props.data[rowIndex][this.props.keyField]) !== -1;
	        this.handleSelectRow(rowIndex + 1, !selected, e);
	      }
	      this.setState(stateObj);
	    }
	  }, {
	    key: '__handleCompleteEditCell__REACT_HOT_LOADER__',
	    value: function __handleCompleteEditCell__REACT_HOT_LOADER__() {
	      return this.__handleCompleteEditCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCompleteEditCell__REACT_HOT_LOADER__',
	    value: function __handleCompleteEditCell__REACT_HOT_LOADER__() {
	      return this.__handleCompleteEditCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCompleteEditCell__REACT_HOT_LOADER__',
	    value: function __handleCompleteEditCell__REACT_HOT_LOADER__() {
	      return this.__handleCompleteEditCell__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCompleteEditCell__REACT_HOT_LOADER__',
	    value: function __handleCompleteEditCell__REACT_HOT_LOADER__(newVal, rowIndex, columnIndex) {
	      this.setState({ currEditCell: null });
	      if (newVal !== null) {
	        this.props.cellEdit.__onCompleteEdit__(newVal, rowIndex, columnIndex);
	      }
	    }
	  }, {
	    key: '__handleClickonSelectColumn__REACT_HOT_LOADER__',
	    value: function __handleClickonSelectColumn__REACT_HOT_LOADER__() {
	      return this.__handleClickonSelectColumn__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleClickonSelectColumn__REACT_HOT_LOADER__',
	    value: function __handleClickonSelectColumn__REACT_HOT_LOADER__() {
	      return this.__handleClickonSelectColumn__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleClickonSelectColumn__REACT_HOT_LOADER__',
	    value: function __handleClickonSelectColumn__REACT_HOT_LOADER__() {
	      return this.__handleClickonSelectColumn__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleClickonSelectColumn__REACT_HOT_LOADER__',
	    value: function __handleClickonSelectColumn__REACT_HOT_LOADER__(e, isSelect, rowIndex, row) {
	      e.stopPropagation();
	      if (e.target.tagName === 'TD' && (this.props.selectRow.clickToSelect || this.props.selectRow.clickToSelectAndEditCell)) {
	        var unselectable = this.props.selectRow.unselectable || [];
	        if (unselectable.indexOf(row[this.props.keyField]) === -1) {
	          this.handleSelectRow(rowIndex + 1, isSelect, e);
	          this.handleClickCell(rowIndex + 1);
	        }
	      }
	    }
	  }, {
	    key: 'renderSelectRowColumn',
	    value: function renderSelectRowColumn(selected, inputType, disabled) {
	      var CustomComponent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var _this2 = this;

	      var rowIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	      var row = arguments[5];

	      return _react2.default.createElement(
	        'td',
	        { onClick: function onClick(e) {
	            _this2.handleClickonSelectColumn(e, !selected, rowIndex, row);
	          }, style: { textAlign: 'center' } },
	        CustomComponent ? _react2.default.createElement(CustomComponent, { type: inputType, checked: selected, disabled: disabled,
	          rowIndex: rowIndex,
	          onChange: function onChange(e) {
	            return _this2.handleSelectRowColumChange(e, rowIndex);
	          } }) : _react2.default.createElement('input', { type: inputType, checked: selected, disabled: disabled,
	          onChange: function onChange(e) {
	            return _this2.handleSelectRowColumChange(e, rowIndex);
	          } })
	      );
	    }
	  }, {
	    key: 'renderExpandRowColumn',
	    value: function renderExpandRowColumn(isExpandableRow, isExpanded, CustomComponent) {
	      var _this3 = this;

	      var rowIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	      var content = null;
	      if (CustomComponent) {
	        content = _react2.default.createElement(CustomComponent, { isExpandableRow: isExpandableRow, isExpanded: isExpanded });
	      } else if (isExpandableRow) {
	        content = isExpanded ? _react2.default.createElement('span', { className: 'glyphicon glyphicon-minus' }) : _react2.default.createElement('span', { className: 'glyphicon glyphicon-plus' });
	      } else {
	        content = ' ';
	      }

	      return _react2.default.createElement(
	        'td',
	        {
	          className: 'react-bs-table-expand-cell',
	          onClick: function onClick() {
	            return _this3.handleClickCell(rowIndex + 1);
	          } },
	        content
	      );
	    }
	  }, {
	    key: '_isSelectRowDefined',
	    value: function _isSelectRowDefined() {
	      return this.props.selectRow.mode === _Const2.default.ROW_SELECT_SINGLE || this.props.selectRow.mode === _Const2.default.ROW_SELECT_MULTI;
	    }
	  }, {
	    key: '_isExpandColumnVisible',
	    value: function _isExpandColumnVisible() {
	      return this.props.expandColumnOptions.expandColumnVisible;
	    }
	  }, {
	    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
	    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
	      return this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
	    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
	      return this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
	    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
	      return this.__getHeaderColGrouop__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__getHeaderColGrouop__REACT_HOT_LOADER__',
	    value: function __getHeaderColGrouop__REACT_HOT_LOADER__() {
	      return this.refs.header.childNodes;
	    }
	  }]);

	  return TableBody;
	}(_react.Component)) || _class);

	TableBody.propTypes = {
	  data: _react.PropTypes.array,
	  columns: _react.PropTypes.array,
	  striped: _react.PropTypes.bool,
	  bordered: _react.PropTypes.bool,
	  hover: _react.PropTypes.bool,
	  condensed: _react.PropTypes.bool,
	  keyField: _react.PropTypes.string,
	  selectedRowKeys: _react.PropTypes.array,
	  onRowClick: _react.PropTypes.func,
	  onRowDoubleClick: _react.PropTypes.func,
	  onSelectRow: _react.PropTypes.func,
	  noDataText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
	  withoutNoDataText: _react.PropTypes.bool,
	  style: _react.PropTypes.object,
	  tableBodyClass: _react.PropTypes.string,
	  bodyContainerClass: _react.PropTypes.string,
	  expandableRow: _react.PropTypes.func,
	  expandComponent: _react.PropTypes.func,
	  expandRowBgColor: _react.PropTypes.string,
	  expandBy: _react.PropTypes.string,
	  expanding: _react.PropTypes.array,
	  onExpand: _react.PropTypes.func,
	  beforeShowError: _react.PropTypes.func,
	  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  x: _react.PropTypes.number,
	  y: _react.PropTypes.number,
	  onNavigateCell: _react.PropTypes.func,
	  draggableRow: _react.PropTypes.bool,
	  onDroppedRow: _react.PropTypes.func
	};
	var _default = TableBody;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(isFun, 'isFun', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableBody.js');

	  __REACT_HOT_LOADER__.register(TableBody, 'TableBody', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableBody.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableBody.js');
	}();

	;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _default = {
	  renderReactSortCaret: function renderReactSortCaret(order) {
	    var orderClass = (0, _classnames2.default)('order', {
	      'dropup': order === _Const2.default.SORT_ASC
	    });
	    return _react2.default.createElement(
	      'span',
	      { className: orderClass },
	      _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 5px' } })
	    );
	  },
	  getScrollBarWidth: function getScrollBarWidth() {
	    var inner = document.createElement('p');
	    inner.style.width = '100%';
	    inner.style.height = '200px';

	    var outer = document.createElement('div');
	    outer.style.position = 'absolute';
	    outer.style.top = '0px';
	    outer.style.left = '0px';
	    outer.style.visibility = 'hidden';
	    outer.style.width = '200px';
	    outer.style.height = '150px';
	    outer.style.overflow = 'hidden';
	    outer.appendChild(inner);

	    document.body.appendChild(outer);
	    var w1 = inner.getBoundingClientRect().width;
	    outer.style.overflow = 'scroll';
	    var w2 = inner.getBoundingClientRect().width;

	    if (w1 === w2) w2 = outer.clientWidth;

	    document.body.removeChild(outer);

	    return w1 - w2;
	  },
	  canUseDOM: function canUseDOM() {
	    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
	  },
	  renderColGroup: function renderColGroup(columns, selectRow) {
	    var expandColumnOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var selectRowHeader = null;
	    var expandRowHeader = null;
	    var isSelectRowDefined = selectRow.mode === _Const2.default.ROW_SELECT_SINGLE || selectRow.mode === _Const2.default.ROW_SELECT_MULTI;
	    if (isSelectRowDefined) {
	      var style = {
	        width: selectRow.columnWidth || '30px',
	        minWidth: selectRow.columnWidth || '30px'
	      };
	      if (!selectRow.hideSelectColumn) {
	        selectRowHeader = _react2.default.createElement('col', { key: 'select-col', style: style });
	      }
	    }
	    if (expandColumnOptions.expandColumnVisible) {
	      var _style = {
	        width: expandColumnOptions.columnWidth || 30,
	        minWidth: expandColumnOptions.columnWidth || 30
	      };
	      expandRowHeader = _react2.default.createElement('col', { key: 'expand-col', style: _style });
	    }
	    var theader = columns.map(function (column, i) {
	      var style = {
	        display: column.hidden ? 'none' : null
	      };
	      if (column.width) {
	        var width = !isNaN(column.width) ? column.width + 'px' : column.width;
	        style.width = width;
	        /** add min-wdth to fix user assign column width
	        not eq offsetWidth in large column table **/
	        style.minWidth = width;
	      }
	      return _react2.default.createElement('col', { style: style, key: i, className: column.className });
	    });

	    return _react2.default.createElement(
	      'colgroup',
	      null,
	      expandColumnOptions.expandColumnVisible && expandColumnOptions.expandColumnBeforeSelectColumn && expandRowHeader,
	      selectRowHeader,
	      expandColumnOptions.expandColumnVisible && !expandColumnOptions.expandColumnBeforeSelectColumn && expandRowHeader,
	      theader
	    );
	  }
	}; /* eslint react/display-name: 0 */

	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/util.js');
	}();

	;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDnd = __webpack_require__(11);

	var _RowTypes = __webpack_require__(158);

	var _RowTypes2 = _interopRequireDefault(_RowTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var rowTarget = {
	  drop: function drop() {
	    return {};
	  },
	  hover: function hover(props, monitor) {
	    var dragIndex = monitor.getItem().rIndex;
	    var hoverIndex = props.rIndex;

	    // Don't replace items with themselves
	    if (dragIndex === hoverIndex) {
	      return;
	    }

	    // Time to actually perform the action
	    props.dragRow(dragIndex, hoverIndex);

	    // Note: we're mutating the monitor item here!
	    // Generally it's better to avoid mutations,
	    // but it's good here for the sake of performance
	    // to avoid expensive rIndex searches.
	    monitor.getItem().rIndex = hoverIndex;
	  }
	};

	var TableRow = (_dec = (0, _reactDnd.DropTarget)(_RowTypes2.default.ROW, rowTarget, function (connect, monitor) {
	  return {
	    connectDropTarget: connect.dropTarget(),
	    isHovering: monitor.isOver({ shallow: true })
	  };
	}), _dec(_class = (_temp = _class2 = function (_Component) {
	  _inherits(TableRow, _Component);

	  function TableRow(props) {
	    _classCallCheck(this, TableRow);

	    var _this = _possibleConstructorReturn(this, (TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call(this, props));

	    _this.rowClick = function () {
	      return _this.__rowClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.expandRow = function () {
	      return _this.__expandRow__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.rowDoubleClick = function () {
	      return _this.__rowDoubleClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.rowMouseOut = function () {
	      return _this.__rowMouseOut__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.rowMouseOver = function () {
	      return _this.__rowMouseOver__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.clickNum = 0;
	    return _this;
	  }

	  _createClass(TableRow, [{
	    key: '__rowClick__REACT_HOT_LOADER__',
	    value: function __rowClick__REACT_HOT_LOADER__() {
	      return this.__rowClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowClick__REACT_HOT_LOADER__',
	    value: function __rowClick__REACT_HOT_LOADER__() {
	      return this.__rowClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowClick__REACT_HOT_LOADER__',
	    value: function __rowClick__REACT_HOT_LOADER__() {
	      return this.__rowClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowClick__REACT_HOT_LOADER__',
	    value: function __rowClick__REACT_HOT_LOADER__(e) {
	      var _this2 = this;

	      var rowIndex = this.props.index + 1;
	      var cellIndex = e.target.cellIndex;
	      if (this.props.onRowClick) this.props.onRowClick(rowIndex, cellIndex);
	      var _props = this.props,
	          selectRow = _props.selectRow,
	          unselectableRow = _props.unselectableRow,
	          isSelected = _props.isSelected,
	          onSelectRow = _props.onSelectRow,
	          onExpandRow = _props.onExpandRow;

	      if (selectRow) {
	        if (selectRow.clickToSelect && !unselectableRow) {
	          onSelectRow(rowIndex, !isSelected, e);
	        } else if (selectRow.clickToSelectAndEditCell && !unselectableRow) {
	          this.clickNum++;
	          /** if clickToSelectAndEditCell is enabled,
	           *  there should be a delay to prevent a selection changed when
	           *  user dblick to edit cell on same row but different cell
	          **/
	          setTimeout(function () {
	            if (_this2.clickNum === 1) {
	              onSelectRow(rowIndex, !isSelected, e);
	              onExpandRow(rowIndex, cellIndex);
	            }
	            _this2.clickNum = 0;
	          }, 200);
	        } else {
	          this.expandRow(rowIndex, cellIndex);
	        }
	      }
	    }
	  }, {
	    key: '__expandRow__REACT_HOT_LOADER__',
	    value: function __expandRow__REACT_HOT_LOADER__() {
	      return this.__expandRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__expandRow__REACT_HOT_LOADER__',
	    value: function __expandRow__REACT_HOT_LOADER__() {
	      return this.__expandRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__expandRow__REACT_HOT_LOADER__',
	    value: function __expandRow__REACT_HOT_LOADER__() {
	      return this.__expandRow__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__expandRow__REACT_HOT_LOADER__',
	    value: function __expandRow__REACT_HOT_LOADER__(rowIndex, cellIndex) {
	      var _this3 = this;

	      this.clickNum++;
	      setTimeout(function () {
	        if (_this3.clickNum === 1) {
	          _this3.props.onExpandRow(rowIndex, cellIndex);
	        }
	        _this3.clickNum = 0;
	      }, 200);
	    }
	  }, {
	    key: '__rowDoubleClick__REACT_HOT_LOADER__',
	    value: function __rowDoubleClick__REACT_HOT_LOADER__() {
	      return this.__rowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowDoubleClick__REACT_HOT_LOADER__',
	    value: function __rowDoubleClick__REACT_HOT_LOADER__() {
	      return this.__rowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowDoubleClick__REACT_HOT_LOADER__',
	    value: function __rowDoubleClick__REACT_HOT_LOADER__() {
	      return this.__rowDoubleClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowDoubleClick__REACT_HOT_LOADER__',
	    value: function __rowDoubleClick__REACT_HOT_LOADER__(e) {
	      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT' && e.target.tagName !== 'TEXTAREA') {
	        if (this.props.onRowDoubleClick) {
	          this.props.onRowDoubleClick(this.props.index);
	        }
	      }
	    }
	  }, {
	    key: '__rowMouseOut__REACT_HOT_LOADER__',
	    value: function __rowMouseOut__REACT_HOT_LOADER__() {
	      return this.__rowMouseOut__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowMouseOut__REACT_HOT_LOADER__',
	    value: function __rowMouseOut__REACT_HOT_LOADER__() {
	      return this.__rowMouseOut__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowMouseOut__REACT_HOT_LOADER__',
	    value: function __rowMouseOut__REACT_HOT_LOADER__() {
	      return this.__rowMouseOut__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowMouseOut__REACT_HOT_LOADER__',
	    value: function __rowMouseOut__REACT_HOT_LOADER__(e) {
	      var rowIndex = this.props.index;
	      if (this.props.onRowMouseOut) {
	        this.props.onRowMouseOut(rowIndex, e);
	      }
	    }
	  }, {
	    key: '__rowMouseOver__REACT_HOT_LOADER__',
	    value: function __rowMouseOver__REACT_HOT_LOADER__() {
	      return this.__rowMouseOver__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowMouseOver__REACT_HOT_LOADER__',
	    value: function __rowMouseOver__REACT_HOT_LOADER__() {
	      return this.__rowMouseOver__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowMouseOver__REACT_HOT_LOADER__',
	    value: function __rowMouseOver__REACT_HOT_LOADER__() {
	      return this.__rowMouseOver__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__rowMouseOver__REACT_HOT_LOADER__',
	    value: function __rowMouseOver__REACT_HOT_LOADER__(e) {
	      var rowIndex = this.props.index;
	      if (this.props.onRowMouseOver) {
	        this.props.onRowMouseOver(rowIndex, e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.clickNum = 0;
	      var _props2 = this.props,
	          connectDropTarget = _props2.connectDropTarget,
	          isHovering = _props2.isHovering;


	      var trCss = {
	        style: {
	          backgroundColor: this.props.isSelected ? this.props.selectRow.bgColor : null,
	          borderBottom: isHovering ? '2px solid' : null
	        },
	        className: (0, _classnames2.default)(this.props.isSelected ? this.props.selectRow.className : null, this.props.className)
	      };

	      return connectDropTarget(_react2.default.createElement(
	        'tr',
	        _extends({}, trCss, {
	          onMouseOver: this.rowMouseOver,
	          onMouseOut: this.rowMouseOut,
	          onClick: this.rowClick,
	          onDoubleClick: this.rowDoubleClick }),
	        this.props.children
	      ));
	    }
	  }]);

	  return TableRow;
	}(_react.Component), _class2.propTypes = {
	  connectDropTarget: _react.PropTypes.func.isRequired,
	  dragRow: _react.PropTypes.func.isRequired,
	  isHovering: _react.PropTypes.bool.isRequired
	}, _temp)) || _class);

	TableRow.propTypes = {
	  index: _react.PropTypes.number,
	  isSelected: _react.PropTypes.bool,
	  enableCellEdit: _react.PropTypes.bool,
	  onRowClick: _react.PropTypes.func,
	  onRowDoubleClick: _react.PropTypes.func,
	  onSelectRow: _react.PropTypes.func,
	  onExpandRow: _react.PropTypes.func,
	  onRowMouseOut: _react.PropTypes.func,
	  onRowMouseOver: _react.PropTypes.func,
	  unselectableRow: _react.PropTypes.bool
	};
	TableRow.defaultProps = {
	  onRowClick: undefined,
	  onRowDoubleClick: undefined
	};
	var _default = TableRow;
	exports.default = _default;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(rowTarget, 'rowTarget', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableRow.js');

	  __REACT_HOT_LOADER__.register(TableRow, 'TableRow', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableRow.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableRow.js');
	}();

	;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DragDropContext = __webpack_require__(12);

	Object.defineProperty(exports, 'DragDropContext', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropContext).default;
	  }
	});

	var _DragDropContextProvider = __webpack_require__(134);

	Object.defineProperty(exports, 'DragDropContextProvider', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropContextProvider).default;
	  }
	});

	var _DragLayer = __webpack_require__(135);

	Object.defineProperty(exports, 'DragLayer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragLayer).default;
	  }
	});

	var _DragSource = __webpack_require__(138);

	Object.defineProperty(exports, 'DragSource', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragSource).default;
	  }
	});

	var _DropTarget = __webpack_require__(153);

	Object.defineProperty(exports, 'DropTarget', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropTarget).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unpackBackendForEs5Users = exports.createChildContext = exports.CHILD_CONTEXT_TYPES = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = DragDropContext;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(13);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _dndCore = __webpack_require__(22);

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _hoistNonReactStatics = __webpack_require__(132);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _checkDecoratorArguments = __webpack_require__(133);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CHILD_CONTEXT_TYPES = exports.CHILD_CONTEXT_TYPES = {
	  dragDropManager: _propTypes2.default.object.isRequired
	};

	var createChildContext = exports.createChildContext = function createChildContext(backend, context) {
	  return {
	    dragDropManager: new _dndCore.DragDropManager(backend, context)
	  };
	};

	var unpackBackendForEs5Users = exports.unpackBackendForEs5Users = function unpackBackendForEs5Users(backendOrModule) {
	  // Auto-detect ES6 default export for people still using ES5
	  var backend = backendOrModule;
	  if ((typeof backend === 'undefined' ? 'undefined' : _typeof(backend)) === 'object' && typeof backend.default === 'function') {
	    backend = backend.default;
	  }
	  (0, _invariant2.default)(typeof backend === 'function', 'Expected the backend to be a function or an ES6 module exporting a default function. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-drop-context.html');
	  return backend;
	};

	function DragDropContext(backendOrModule) {
	  _checkDecoratorArguments2.default.apply(undefined, ['DragDropContext', 'backend'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params

	  var backend = unpackBackendForEs5Users(backendOrModule);
	  var childContext = createChildContext(backend);

	  return function decorateContext(DecoratedComponent) {
	    var _class, _temp;

	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    var DragDropContextContainer = (_temp = _class = function (_Component) {
	      _inherits(DragDropContextContainer, _Component);

	      function DragDropContextContainer() {
	        _classCallCheck(this, DragDropContextContainer);

	        return _possibleConstructorReturn(this, (DragDropContextContainer.__proto__ || Object.getPrototypeOf(DragDropContextContainer)).apply(this, arguments));
	      }

	      _createClass(DragDropContextContainer, [{
	        key: 'getDecoratedComponentInstance',
	        value: function getDecoratedComponentInstance() {
	          (0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can ' + 'not be a stateless component.');
	          return this.child;
	        }
	      }, {
	        key: 'getManager',
	        value: function getManager() {
	          return childContext.dragDropManager;
	        }
	      }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	          return childContext;
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _this2 = this;

	          return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, {
	            ref: function ref(child) {
	              return _this2.child = child;
	            }
	          }));
	        }
	      }]);

	      return DragDropContextContainer;
	    }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragDropContext(' + displayName + ')', _class.childContextTypes = CHILD_CONTEXT_TYPES, _temp);


	    return (0, _hoistNonReactStatics2.default)(DragDropContextContainer, DecoratedComponent);
	  };
	}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(15)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(21)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(16);
	var invariant = __webpack_require__(17);
	var warning = __webpack_require__(18);

	var ReactPropTypesSecret = __webpack_require__(19);
	var checkPropTypes = __webpack_require__(20);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(16);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(17);
	  var warning = __webpack_require__(18);
	  var ReactPropTypesSecret = __webpack_require__(19);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(16);
	var invariant = __webpack_require__(17);
	var ReactPropTypesSecret = __webpack_require__(19);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DragDropManager = __webpack_require__(23);

	Object.defineProperty(exports, 'DragDropManager', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragDropManager).default;
	  }
	});

	var _DragSource = __webpack_require__(129);

	Object.defineProperty(exports, 'DragSource', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DragSource).default;
	  }
	});

	var _DropTarget = __webpack_require__(130);

	Object.defineProperty(exports, 'DropTarget', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DropTarget).default;
	  }
	});

	var _createTestBackend = __webpack_require__(131);

	Object.defineProperty(exports, 'createTestBackend', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createTestBackend).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createStore = __webpack_require__(24);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _reducers = __webpack_require__(39);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _dragDrop = __webpack_require__(41);

	var dragDropActions = _interopRequireWildcard(_dragDrop);

	var _DragDropMonitor = __webpack_require__(124);

	var _DragDropMonitor2 = _interopRequireDefault(_DragDropMonitor);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragDropManager = function () {
	  function DragDropManager(createBackend) {
	    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, DragDropManager);

	    var store = (0, _createStore2.default)(_reducers2.default);
	    this.context = context;
	    this.store = store;
	    this.monitor = new _DragDropMonitor2.default(store);
	    this.registry = this.monitor.registry;
	    this.backend = createBackend(this);

	    store.subscribe(this.handleRefCountChange.bind(this));
	  }

	  _createClass(DragDropManager, [{
	    key: 'handleRefCountChange',
	    value: function handleRefCountChange() {
	      var shouldSetUp = this.store.getState().refCount > 0;
	      if (shouldSetUp && !this.isSetUp) {
	        this.backend.setup();
	        this.isSetUp = true;
	      } else if (!shouldSetUp && this.isSetUp) {
	        this.backend.teardown();
	        this.isSetUp = false;
	      }
	    }
	  }, {
	    key: 'getContext',
	    value: function getContext() {
	      return this.context;
	    }
	  }, {
	    key: 'getMonitor',
	    value: function getMonitor() {
	      return this.monitor;
	    }
	  }, {
	    key: 'getBackend',
	    value: function getBackend() {
	      return this.backend;
	    }
	  }, {
	    key: 'getRegistry',
	    value: function getRegistry() {
	      return this.registry;
	    }
	  }, {
	    key: 'getActions',
	    value: function getActions() {
	      var manager = this;
	      var dispatch = this.store.dispatch;


	      function bindActionCreator(actionCreator) {
	        return function () {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          var action = actionCreator.apply(manager, args);
	          if (typeof action !== 'undefined') {
	            dispatch(action);
	          }
	        };
	      }

	      return Object.keys(dragDropActions).filter(function (key) {
	        return typeof dragDropActions[key] === 'function';
	      }).reduce(function (boundActions, key) {
	        var action = dragDropActions[key];
	        boundActions[key] = bindActionCreator(action); // eslint-disable-line no-param-reassign
	        return boundActions;
	      }, {});
	    }
	  }]);

	  return DragDropManager;
	}();

	exports.default = DragDropManager;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(25);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(35);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'

	  /**
	   * Creates a Redux store that holds the state tree.
	   * The only way to change the data in the store is to call `dispatch()` on it.
	   *
	   * There should only be a single store in your app. To specify how different
	   * parts of the state tree respond to actions, you may combine several reducers
	   * into a single reducer function by using `combineReducers`.
	   *
	   * @param {Function} reducer A function that returns the next state tree, given
	   * the current state tree and the action to handle.
	   *
	   * @param {any} [preloadedState] The initial state. You may optionally specify it
	   * to hydrate the state from the server in universal apps, or to restore a
	   * previously serialized user session.
	   * If you use `combineReducers` to produce the root reducer function, this must be
	   * an object with the same shape as `combineReducers` keys.
	   *
	   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
	   * to enhance the store with third-party capabilities such as middleware,
	   * time travel, persistence, etc. The only store enhancer that ships with Redux
	   * is `applyMiddleware()`.
	   *
	   * @returns {Store} A Redux store that lets you read the state, dispatch actions
	   * and subscribe to changes.
	   */
	};function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(26),
	    getPrototype = __webpack_require__(32),
	    isObjectLike = __webpack_require__(34);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(27),
	    getRawTag = __webpack_require__(30),
	    objectToString = __webpack_require__(31);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(28);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(29);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(27);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(33);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(36);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(38);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(37)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reduce;

	var _dragOffset = __webpack_require__(40);

	var _dragOffset2 = _interopRequireDefault(_dragOffset);

	var _dragOperation = __webpack_require__(46);

	var _dragOperation2 = _interopRequireDefault(_dragOperation);

	var _refCount = __webpack_require__(105);

	var _refCount2 = _interopRequireDefault(_refCount);

	var _dirtyHandlerIds = __webpack_require__(106);

	var _dirtyHandlerIds2 = _interopRequireDefault(_dirtyHandlerIds);

	var _stateId = __webpack_require__(123);

	var _stateId2 = _interopRequireDefault(_stateId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function reduce() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];

	  return {
	    dirtyHandlerIds: (0, _dirtyHandlerIds2.default)(state.dirtyHandlerIds, action, state.dragOperation),
	    dragOffset: (0, _dragOffset2.default)(state.dragOffset, action),
	    refCount: (0, _refCount2.default)(state.refCount, action),
	    dragOperation: (0, _dragOperation2.default)(state.dragOperation, action),
	    stateId: (0, _stateId2.default)(state.stateId)
	  };
	}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = dragOffset;
	exports.getSourceClientOffset = getSourceClientOffset;
	exports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;

	var _dragDrop = __webpack_require__(41);

	var initialState = {
	  initialSourceClientOffset: null,
	  initialClientOffset: null,
	  clientOffset: null
	};

	function areOffsetsEqual(offsetA, offsetB) {
	  if (offsetA === offsetB) {
	    return true;
	  }
	  return offsetA && offsetB && offsetA.x === offsetB.x && offsetA.y === offsetB.y;
	}

	function dragOffset() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _dragDrop.BEGIN_DRAG:
	      return {
	        initialSourceClientOffset: action.sourceClientOffset,
	        initialClientOffset: action.clientOffset,
	        clientOffset: action.clientOffset
	      };
	    case _dragDrop.HOVER:
	      if (areOffsetsEqual(state.clientOffset, action.clientOffset)) {
	        return state;
	      }
	      return _extends({}, state, {
	        clientOffset: action.clientOffset
	      });
	    case _dragDrop.END_DRAG:
	    case _dragDrop.DROP:
	      return initialState;
	    default:
	      return state;
	  }
	}

	function getSourceClientOffset(state) {
	  var clientOffset = state.clientOffset,
	      initialClientOffset = state.initialClientOffset,
	      initialSourceClientOffset = state.initialSourceClientOffset;

	  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x + initialSourceClientOffset.x - initialClientOffset.x,
	    y: clientOffset.y + initialSourceClientOffset.y - initialClientOffset.y
	  };
	}

	function getDifferenceFromInitialOffset(state) {
	  var clientOffset = state.clientOffset,
	      initialClientOffset = state.initialClientOffset;

	  if (!clientOffset || !initialClientOffset) {
	    return null;
	  }
	  return {
	    x: clientOffset.x - initialClientOffset.x,
	    y: clientOffset.y - initialClientOffset.y
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.END_DRAG = exports.DROP = exports.HOVER = exports.PUBLISH_DRAG_SOURCE = exports.BEGIN_DRAG = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.beginDrag = beginDrag;
	exports.publishDragSource = publishDragSource;
	exports.hover = hover;
	exports.drop = drop;
	exports.endDrag = endDrag;

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(43);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _isObject = __webpack_require__(44);

	var _isObject2 = _interopRequireDefault(_isObject);

	var _matchesType = __webpack_require__(45);

	var _matchesType2 = _interopRequireDefault(_matchesType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BEGIN_DRAG = exports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
	var PUBLISH_DRAG_SOURCE = exports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
	var HOVER = exports.HOVER = 'dnd-core/HOVER';
	var DROP = exports.DROP = 'dnd-core/DROP';
	var END_DRAG = exports.END_DRAG = 'dnd-core/END_DRAG';

	function beginDrag(sourceIds) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { publishSource: true, clientOffset: null };
	  var publishSource = options.publishSource,
	      clientOffset = options.clientOffset,
	      getSourceClientOffset = options.getSourceClientOffset;

	  (0, _invariant2.default)((0, _isArray2.default)(sourceIds), 'Expected sourceIds to be an array.');

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  (0, _invariant2.default)(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');

	  for (var i = 0; i < sourceIds.length; i++) {
	    (0, _invariant2.default)(registry.getSource(sourceIds[i]), 'Expected sourceIds to be registered.');
	  }

	  var sourceId = null;
	  for (var _i = sourceIds.length - 1; _i >= 0; _i--) {
	    if (monitor.canDragSource(sourceIds[_i])) {
	      sourceId = sourceIds[_i];
	      break;
	    }
	  }
	  if (sourceId === null) {
	    return;
	  }

	  var sourceClientOffset = null;
	  if (clientOffset) {
	    (0, _invariant2.default)(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
	    sourceClientOffset = getSourceClientOffset(sourceId);
	  }

	  var source = registry.getSource(sourceId);
	  var item = source.beginDrag(monitor, sourceId);
	  (0, _invariant2.default)((0, _isObject2.default)(item), 'Item must be an object.');

	  registry.pinSource(sourceId);

	  var itemType = registry.getSourceType(sourceId);
	  return {
	    type: BEGIN_DRAG,
	    itemType: itemType,
	    item: item,
	    sourceId: sourceId,
	    clientOffset: clientOffset,
	    sourceClientOffset: sourceClientOffset,
	    isSourcePublic: publishSource
	  };
	}

	function publishDragSource() {
	  var monitor = this.getMonitor();
	  if (!monitor.isDragging()) {
	    return;
	  }

	  return { type: PUBLISH_DRAG_SOURCE };
	}

	function hover(targetIdsArg) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$clientOffset = _ref.clientOffset,
	      clientOffset = _ref$clientOffset === undefined ? null : _ref$clientOffset;

	  (0, _invariant2.default)((0, _isArray2.default)(targetIdsArg), 'Expected targetIds to be an array.');
	  var targetIds = targetIdsArg.slice(0);

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call hover while not dragging.');
	  (0, _invariant2.default)(!monitor.didDrop(), 'Cannot call hover after drop.');

	  // First check invariants.
	  for (var i = 0; i < targetIds.length; i++) {
	    var targetId = targetIds[i];
	    (0, _invariant2.default)(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');

	    var target = registry.getTarget(targetId);
	    (0, _invariant2.default)(target, 'Expected targetIds to be registered.');
	  }

	  var draggedItemType = monitor.getItemType();

	  // Remove those targetIds that don't match the targetType.  This
	  // fixes shallow isOver which would only be non-shallow because of
	  // non-matching targets.
	  for (var _i2 = targetIds.length - 1; _i2 >= 0; _i2--) {
	    var _targetId = targetIds[_i2];
	    var targetType = registry.getTargetType(_targetId);
	    if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
	      targetIds.splice(_i2, 1);
	    }
	  }

	  // Finally call hover on all matching targets.
	  for (var _i3 = 0; _i3 < targetIds.length; _i3++) {
	    var _targetId2 = targetIds[_i3];
	    var _target = registry.getTarget(_targetId2);
	    _target.hover(monitor, _targetId2);
	  }

	  return {
	    type: HOVER,
	    targetIds: targetIds,
	    clientOffset: clientOffset
	  };
	}

	function drop() {
	  var _this = this;

	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call drop while not dragging.');
	  (0, _invariant2.default)(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');

	  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);

	  targetIds.reverse();
	  targetIds.forEach(function (targetId, index) {
	    var target = registry.getTarget(targetId);

	    var dropResult = target.drop(monitor, targetId);
	    (0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isObject2.default)(dropResult), 'Drop result must either be an object or undefined.');
	    if (typeof dropResult === 'undefined') {
	      dropResult = index === 0 ? {} : monitor.getDropResult();
	    }

	    _this.store.dispatch({
	      type: DROP,
	      dropResult: _extends({}, options, dropResult)
	    });
	  });
	}

	function endDrag() {
	  var monitor = this.getMonitor();
	  var registry = this.getRegistry();
	  (0, _invariant2.default)(monitor.isDragging(), 'Cannot call endDrag while not dragging.');

	  var sourceId = monitor.getSourceId();
	  var source = registry.getSource(sourceId, true);
	  source.endDrag(monitor, sourceId);

	  registry.unpinSource();

	  return { type: END_DRAG };
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = matchesType;

	var _isArray = __webpack_require__(43);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function matchesType(targetType, draggedItemType) {
	  if ((0, _isArray2.default)(targetType)) {
	    return targetType.some(function (t) {
	      return t === draggedItemType;
	    });
	  } else {
	    return targetType === draggedItemType;
	  }
	}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = dragOperation;

	var _without = __webpack_require__(47);

	var _without2 = _interopRequireDefault(_without);

	var _dragDrop = __webpack_require__(41);

	var _registry = __webpack_require__(104);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = {
	  itemType: null,
	  item: null,
	  sourceId: null,
	  targetIds: [],
	  dropResult: null,
	  didDrop: false,
	  isSourcePublic: null
	};

	function dragOperation() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];

	  switch (action.type) {
	    case _dragDrop.BEGIN_DRAG:
	      return _extends({}, state, {
	        itemType: action.itemType,
	        item: action.item,
	        sourceId: action.sourceId,
	        isSourcePublic: action.isSourcePublic,
	        dropResult: null,
	        didDrop: false
	      });
	    case _dragDrop.PUBLISH_DRAG_SOURCE:
	      return _extends({}, state, {
	        isSourcePublic: true
	      });
	    case _dragDrop.HOVER:
	      return _extends({}, state, {
	        targetIds: action.targetIds
	      });
	    case _registry.REMOVE_TARGET:
	      if (state.targetIds.indexOf(action.targetId) === -1) {
	        return state;
	      }
	      return _extends({}, state, {
	        targetIds: (0, _without2.default)(state.targetIds, action.targetId)
	      });
	    case _dragDrop.DROP:
	      return _extends({}, state, {
	        dropResult: action.dropResult,
	        didDrop: true,
	        targetIds: []
	      });
	    case _dragDrop.END_DRAG:
	      return _extends({}, state, {
	        itemType: null,
	        item: null,
	        sourceId: null,
	        dropResult: null,
	        didDrop: false,
	        isSourcePublic: null,
	        targetIds: []
	      });
	    default:
	      return state;
	  }
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(48),
	    baseRest = __webpack_require__(92),
	    isArrayLikeObject = __webpack_require__(101);

	/**
	 * Creates an array excluding all given values using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * **Note:** Unlike `_.pull`, this method returns a new array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...*} [values] The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.xor
	 * @example
	 *
	 * _.without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 */
	var without = baseRest(function(array, values) {
	  return isArrayLikeObject(array)
	    ? baseDifference(array, values)
	    : [];
	});

	module.exports = without;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(49),
	    arrayIncludes = __webpack_require__(83),
	    arrayIncludesWith = __webpack_require__(88),
	    arrayMap = __webpack_require__(89),
	    baseUnary = __webpack_require__(90),
	    cacheHas = __webpack_require__(91);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee == null ? value : iteratee(value);

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(50),
	    setCacheAdd = __webpack_require__(81),
	    setCacheHas = __webpack_require__(82);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(51),
	    mapCacheDelete = __webpack_require__(75),
	    mapCacheGet = __webpack_require__(78),
	    mapCacheHas = __webpack_require__(79),
	    mapCacheSet = __webpack_require__(80);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(52),
	    ListCache = __webpack_require__(66),
	    Map = __webpack_require__(74);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(53),
	    hashDelete = __webpack_require__(62),
	    hashGet = __webpack_require__(63),
	    hashHas = __webpack_require__(64),
	    hashSet = __webpack_require__(65);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(54);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(56),
	    getValue = __webpack_require__(61);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(57),
	    isMasked = __webpack_require__(58),
	    isObject = __webpack_require__(44),
	    toSource = __webpack_require__(60);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(26),
	    isObject = __webpack_require__(44);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(59);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(28);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(54);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(54);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(54);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(67),
	    listCacheDelete = __webpack_require__(68),
	    listCacheGet = __webpack_require__(71),
	    listCacheHas = __webpack_require__(72),
	    listCacheSet = __webpack_require__(73);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(69);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(70);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(69);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(69);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(69);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55),
	    root = __webpack_require__(28);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(76);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(77);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(76);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(76);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(76);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(84);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(85),
	    baseIsNaN = __webpack_require__(86),
	    strictIndexOf = __webpack_require__(87);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(93),
	    overRest = __webpack_require__(94),
	    setToString = __webpack_require__(96);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(95);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(97),
	    shortOut = __webpack_require__(100);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(98),
	    defineProperty = __webpack_require__(99),
	    identity = __webpack_require__(93);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(102),
	    isObjectLike = __webpack_require__(34);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(57),
	    isLength = __webpack_require__(103);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addSource = addSource;
	exports.addTarget = addTarget;
	exports.removeSource = removeSource;
	exports.removeTarget = removeTarget;
	var ADD_SOURCE = exports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';
	var ADD_TARGET = exports.ADD_TARGET = 'dnd-core/ADD_TARGET';
	var REMOVE_SOURCE = exports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
	var REMOVE_TARGET = exports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';

	function addSource(sourceId) {
	  return {
	    type: ADD_SOURCE,
	    sourceId: sourceId
	  };
	}

	function addTarget(targetId) {
	  return {
	    type: ADD_TARGET,
	    targetId: targetId
	  };
	}

	function removeSource(sourceId) {
	  return {
	    type: REMOVE_SOURCE,
	    sourceId: sourceId
	  };
	}

	function removeTarget(targetId) {
	  return {
	    type: REMOVE_TARGET,
	    targetId: targetId
	  };
	}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = refCount;

	var _registry = __webpack_require__(104);

	function refCount() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var action = arguments[1];

	  switch (action.type) {
	    case _registry.ADD_SOURCE:
	    case _registry.ADD_TARGET:
	      return state + 1;
	    case _registry.REMOVE_SOURCE:
	    case _registry.REMOVE_TARGET:
	      return state - 1;
	    default:
	      return state;
	  }
	}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = dirtyHandlerIds;
	exports.areDirty = areDirty;

	var _xor = __webpack_require__(107);

	var _xor2 = _interopRequireDefault(_xor);

	var _intersection = __webpack_require__(120);

	var _intersection2 = _interopRequireDefault(_intersection);

	var _dragDrop = __webpack_require__(41);

	var _registry = __webpack_require__(104);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NONE = [];
	var ALL = [];

	function dirtyHandlerIds() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NONE;
	  var action = arguments[1];
	  var dragOperation = arguments[2];

	  switch (action.type) {
	    case _dragDrop.HOVER:
	      break;
	    case _registry.ADD_SOURCE:
	    case _registry.ADD_TARGET:
	    case _registry.REMOVE_TARGET:
	    case _registry.REMOVE_SOURCE:
	      return NONE;
	    case _dragDrop.BEGIN_DRAG:
	    case _dragDrop.PUBLISH_DRAG_SOURCE:
	    case _dragDrop.END_DRAG:
	    case _dragDrop.DROP:
	    default:
	      return ALL;
	  }

	  var targetIds = action.targetIds;
	  var prevTargetIds = dragOperation.targetIds;

	  var result = (0, _xor2.default)(targetIds, prevTargetIds);

	  var didChange = false;
	  if (result.length === 0) {
	    for (var i = 0; i < targetIds.length; i++) {
	      if (targetIds[i] !== prevTargetIds[i]) {
	        didChange = true;
	        break;
	      }
	    }
	  } else {
	    didChange = true;
	  }

	  if (!didChange) {
	    return NONE;
	  }

	  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
	  var innermostTargetId = targetIds[targetIds.length - 1];

	  if (prevInnermostTargetId !== innermostTargetId) {
	    if (prevInnermostTargetId) {
	      result.push(prevInnermostTargetId);
	    }
	    if (innermostTargetId) {
	      result.push(innermostTargetId);
	    }
	  }

	  return result;
	}

	function areDirty(state, handlerIds) {
	  if (state === NONE) {
	    return false;
	  }

	  if (state === ALL || typeof handlerIds === 'undefined') {
	    return true;
	  }

	  return (0, _intersection2.default)(handlerIds, state).length > 0;
	}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(108),
	    baseRest = __webpack_require__(92),
	    baseXor = __webpack_require__(109),
	    isArrayLikeObject = __webpack_require__(101);

	/**
	 * Creates an array of unique values that is the
	 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	 * of the given arrays. The order of result values is determined by the order
	 * they occur in the arrays.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of filtered values.
	 * @see _.difference, _.without
	 * @example
	 *
	 * _.xor([2, 1], [2, 3]);
	 * // => [1, 3]
	 */
	var xor = baseRest(function(arrays) {
	  return baseXor(arrayFilter(arrays, isArrayLikeObject));
	});

	module.exports = xor;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(48),
	    baseFlatten = __webpack_require__(110),
	    baseUniq = __webpack_require__(115);

	/**
	 * The base implementation of methods like `_.xor`, without support for
	 * iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of values.
	 */
	function baseXor(arrays, iteratee, comparator) {
	  var length = arrays.length;
	  if (length < 2) {
	    return length ? baseUniq(arrays[0]) : [];
	  }
	  var index = -1,
	      result = Array(length);

	  while (++index < length) {
	    var array = arrays[index],
	        othIndex = -1;

	    while (++othIndex < length) {
	      if (othIndex != index) {
	        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
	      }
	    }
	  }
	  return baseUniq(baseFlatten(result, 1), iteratee, comparator);
	}

	module.exports = baseXor;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(111),
	    isFlattenable = __webpack_require__(112);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(27),
	    isArguments = __webpack_require__(113),
	    isArray = __webpack_require__(43);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(114),
	    isObjectLike = __webpack_require__(34);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(26),
	    isObjectLike = __webpack_require__(34);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(49),
	    arrayIncludes = __webpack_require__(83),
	    arrayIncludesWith = __webpack_require__(88),
	    cacheHas = __webpack_require__(91),
	    createSet = __webpack_require__(116),
	    setToArray = __webpack_require__(119);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(117),
	    noop = __webpack_require__(118),
	    setToArray = __webpack_require__(119);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(55),
	    root = __webpack_require__(28);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(89),
	    baseIntersection = __webpack_require__(121),
	    baseRest = __webpack_require__(92),
	    castArrayLikeObject = __webpack_require__(122);

	/**
	 * Creates an array of unique values that are included in all given arrays
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons. The order and references of result values are
	 * determined by the first array.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of intersecting values.
	 * @example
	 *
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */
	var intersection = baseRest(function(arrays) {
	  var mapped = arrayMap(arrays, castArrayLikeObject);
	  return (mapped.length && mapped[0] === arrays[0])
	    ? baseIntersection(mapped)
	    : [];
	});

	module.exports = intersection;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(49),
	    arrayIncludes = __webpack_require__(83),
	    arrayIncludesWith = __webpack_require__(88),
	    arrayMap = __webpack_require__(89),
	    baseUnary = __webpack_require__(90),
	    cacheHas = __webpack_require__(91);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMin = Math.min;

	/**
	 * The base implementation of methods like `_.intersection`, without support
	 * for iteratee shorthands, that accepts an array of arrays to inspect.
	 *
	 * @private
	 * @param {Array} arrays The arrays to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of shared values.
	 */
	function baseIntersection(arrays, iteratee, comparator) {
	  var includes = comparator ? arrayIncludesWith : arrayIncludes,
	      length = arrays[0].length,
	      othLength = arrays.length,
	      othIndex = othLength,
	      caches = Array(othLength),
	      maxLength = Infinity,
	      result = [];

	  while (othIndex--) {
	    var array = arrays[othIndex];
	    if (othIndex && iteratee) {
	      array = arrayMap(array, baseUnary(iteratee));
	    }
	    maxLength = nativeMin(array.length, maxLength);
	    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	      ? new SetCache(othIndex && array)
	      : undefined;
	  }
	  array = arrays[0];

	  var index = -1,
	      seen = caches[0];

	  outer:
	  while (++index < length && result.length < maxLength) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (!(seen
	          ? cacheHas(seen, computed)
	          : includes(result, computed, comparator)
	        )) {
	      othIndex = othLength;
	      while (--othIndex) {
	        var cache = caches[othIndex];
	        if (!(cache
	              ? cacheHas(cache, computed)
	              : includes(arrays[othIndex], computed, comparator))
	            ) {
	          continue outer;
	        }
	      }
	      if (seen) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseIntersection;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(101);

	/**
	 * Casts `value` to an empty array if it's not an array like object.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array|Object} Returns the cast array-like object.
	 */
	function castArrayLikeObject(value) {
	  return isArrayLikeObject(value) ? value : [];
	}

	module.exports = castArrayLikeObject;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = stateId;
	function stateId() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	  return state + 1;
	}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(43);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _matchesType = __webpack_require__(45);

	var _matchesType2 = _interopRequireDefault(_matchesType);

	var _HandlerRegistry = __webpack_require__(125);

	var _HandlerRegistry2 = _interopRequireDefault(_HandlerRegistry);

	var _dragOffset = __webpack_require__(40);

	var _dirtyHandlerIds = __webpack_require__(106);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragDropMonitor = function () {
	  function DragDropMonitor(store) {
	    _classCallCheck(this, DragDropMonitor);

	    this.store = store;
	    this.registry = new _HandlerRegistry2.default(store);
	  }

	  _createClass(DragDropMonitor, [{
	    key: 'subscribeToStateChange',
	    value: function subscribeToStateChange(listener) {
	      var _this = this;

	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var handlerIds = options.handlerIds;

	      (0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');
	      (0, _invariant2.default)(typeof handlerIds === 'undefined' || (0, _isArray2.default)(handlerIds), 'handlerIds, when specified, must be an array of strings.');

	      var prevStateId = this.store.getState().stateId;
	      var handleChange = function handleChange() {
	        var state = _this.store.getState();
	        var currentStateId = state.stateId;
	        try {
	          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !(0, _dirtyHandlerIds.areDirty)(state.dirtyHandlerIds, handlerIds);

	          if (!canSkipListener) {
	            listener();
	          }
	        } finally {
	          prevStateId = currentStateId;
	        }
	      };

	      return this.store.subscribe(handleChange);
	    }
	  }, {
	    key: 'subscribeToOffsetChange',
	    value: function subscribeToOffsetChange(listener) {
	      var _this2 = this;

	      (0, _invariant2.default)(typeof listener === 'function', 'listener must be a function.');

	      var previousState = this.store.getState().dragOffset;
	      var handleChange = function handleChange() {
	        var nextState = _this2.store.getState().dragOffset;
	        if (nextState === previousState) {
	          return;
	        }

	        previousState = nextState;
	        listener();
	      };

	      return this.store.subscribe(handleChange);
	    }
	  }, {
	    key: 'canDragSource',
	    value: function canDragSource(sourceId) {
	      var source = this.registry.getSource(sourceId);
	      (0, _invariant2.default)(source, 'Expected to find a valid source.');

	      if (this.isDragging()) {
	        return false;
	      }

	      return source.canDrag(this, sourceId);
	    }
	  }, {
	    key: 'canDropOnTarget',
	    value: function canDropOnTarget(targetId) {
	      var target = this.registry.getTarget(targetId);
	      (0, _invariant2.default)(target, 'Expected to find a valid target.');

	      if (!this.isDragging() || this.didDrop()) {
	        return false;
	      }

	      var targetType = this.registry.getTargetType(targetId);
	      var draggedItemType = this.getItemType();
	      return (0, _matchesType2.default)(targetType, draggedItemType) && target.canDrop(this, targetId);
	    }
	  }, {
	    key: 'isDragging',
	    value: function isDragging() {
	      return Boolean(this.getItemType());
	    }
	  }, {
	    key: 'isDraggingSource',
	    value: function isDraggingSource(sourceId) {
	      var source = this.registry.getSource(sourceId, true);
	      (0, _invariant2.default)(source, 'Expected to find a valid source.');

	      if (!this.isDragging() || !this.isSourcePublic()) {
	        return false;
	      }

	      var sourceType = this.registry.getSourceType(sourceId);
	      var draggedItemType = this.getItemType();
	      if (sourceType !== draggedItemType) {
	        return false;
	      }

	      return source.isDragging(this, sourceId);
	    }
	  }, {
	    key: 'isOverTarget',
	    value: function isOverTarget(targetId) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { shallow: false };
	      var shallow = options.shallow;

	      if (!this.isDragging()) {
	        return false;
	      }

	      var targetType = this.registry.getTargetType(targetId);
	      var draggedItemType = this.getItemType();
	      if (!(0, _matchesType2.default)(targetType, draggedItemType)) {
	        return false;
	      }

	      var targetIds = this.getTargetIds();
	      if (!targetIds.length) {
	        return false;
	      }

	      var index = targetIds.indexOf(targetId);
	      if (shallow) {
	        return index === targetIds.length - 1;
	      } else {
	        return index > -1;
	      }
	    }
	  }, {
	    key: 'getItemType',
	    value: function getItemType() {
	      return this.store.getState().dragOperation.itemType;
	    }
	  }, {
	    key: 'getItem',
	    value: function getItem() {
	      return this.store.getState().dragOperation.item;
	    }
	  }, {
	    key: 'getSourceId',
	    value: function getSourceId() {
	      return this.store.getState().dragOperation.sourceId;
	    }
	  }, {
	    key: 'getTargetIds',
	    value: function getTargetIds() {
	      return this.store.getState().dragOperation.targetIds;
	    }
	  }, {
	    key: 'getDropResult',
	    value: function getDropResult() {
	      return this.store.getState().dragOperation.dropResult;
	    }
	  }, {
	    key: 'didDrop',
	    value: function didDrop() {
	      return this.store.getState().dragOperation.didDrop;
	    }
	  }, {
	    key: 'isSourcePublic',
	    value: function isSourcePublic() {
	      return this.store.getState().dragOperation.isSourcePublic;
	    }
	  }, {
	    key: 'getInitialClientOffset',
	    value: function getInitialClientOffset() {
	      return this.store.getState().dragOffset.initialClientOffset;
	    }
	  }, {
	    key: 'getInitialSourceClientOffset',
	    value: function getInitialSourceClientOffset() {
	      return this.store.getState().dragOffset.initialSourceClientOffset;
	    }
	  }, {
	    key: 'getClientOffset',
	    value: function getClientOffset() {
	      return this.store.getState().dragOffset.clientOffset;
	    }
	  }, {
	    key: 'getSourceClientOffset',
	    value: function getSourceClientOffset() {
	      return (0, _dragOffset.getSourceClientOffset)(this.store.getState().dragOffset);
	    }
	  }, {
	    key: 'getDifferenceFromInitialOffset',
	    value: function getDifferenceFromInitialOffset() {
	      return (0, _dragOffset.getDifferenceFromInitialOffset)(this.store.getState().dragOffset);
	    }
	  }]);

	  return DragDropMonitor;
	}();

	exports.default = DragDropMonitor;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isArray = __webpack_require__(43);

	var _isArray2 = _interopRequireDefault(_isArray);

	var _asap = __webpack_require__(126);

	var _asap2 = _interopRequireDefault(_asap);

	var _registry = __webpack_require__(104);

	var _getNextUniqueId = __webpack_require__(128);

	var _getNextUniqueId2 = _interopRequireDefault(_getNextUniqueId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HandlerRoles = {
	  SOURCE: 'SOURCE',
	  TARGET: 'TARGET'
	};

	function validateSourceContract(source) {
	  (0, _invariant2.default)(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
	  (0, _invariant2.default)(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
	  (0, _invariant2.default)(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
	}

	function validateTargetContract(target) {
	  (0, _invariant2.default)(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
	  (0, _invariant2.default)(typeof target.hover === 'function', 'Expected hover to be a function.');
	  (0, _invariant2.default)(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
	}

	function validateType(type, allowArray) {
	  if (allowArray && (0, _isArray2.default)(type)) {
	    type.forEach(function (t) {
	      return validateType(t, false);
	    });
	    return;
	  }

	  (0, _invariant2.default)(typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
	}

	function getNextHandlerId(role) {
	  var id = (0, _getNextUniqueId2.default)().toString();
	  switch (role) {
	    case HandlerRoles.SOURCE:
	      return 'S' + id;
	    case HandlerRoles.TARGET:
	      return 'T' + id;
	    default:
	      (0, _invariant2.default)(false, 'Unknown role: ' + role);
	  }
	}

	function parseRoleFromHandlerId(handlerId) {
	  switch (handlerId[0]) {
	    case 'S':
	      return HandlerRoles.SOURCE;
	    case 'T':
	      return HandlerRoles.TARGET;
	    default:
	      (0, _invariant2.default)(false, 'Cannot parse handler ID: ' + handlerId);
	  }
	}

	var HandlerRegistry = function () {
	  function HandlerRegistry(store) {
	    _classCallCheck(this, HandlerRegistry);

	    this.store = store;

	    this.types = {};
	    this.handlers = {};

	    this.pinnedSourceId = null;
	    this.pinnedSource = null;
	  }

	  _createClass(HandlerRegistry, [{
	    key: 'addSource',
	    value: function addSource(type, source) {
	      validateType(type);
	      validateSourceContract(source);

	      var sourceId = this.addHandler(HandlerRoles.SOURCE, type, source);
	      this.store.dispatch((0, _registry.addSource)(sourceId));
	      return sourceId;
	    }
	  }, {
	    key: 'addTarget',
	    value: function addTarget(type, target) {
	      validateType(type, true);
	      validateTargetContract(target);

	      var targetId = this.addHandler(HandlerRoles.TARGET, type, target);
	      this.store.dispatch((0, _registry.addTarget)(targetId));
	      return targetId;
	    }
	  }, {
	    key: 'addHandler',
	    value: function addHandler(role, type, handler) {
	      var id = getNextHandlerId(role);
	      this.types[id] = type;
	      this.handlers[id] = handler;

	      return id;
	    }
	  }, {
	    key: 'containsHandler',
	    value: function containsHandler(handler) {
	      var _this = this;

	      return Object.keys(this.handlers).some(function (key) {
	        return _this.handlers[key] === handler;
	      });
	    }
	  }, {
	    key: 'getSource',
	    value: function getSource(sourceId, includePinned) {
	      (0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');

	      var isPinned = includePinned && sourceId === this.pinnedSourceId;
	      var source = isPinned ? this.pinnedSource : this.handlers[sourceId];

	      return source;
	    }
	  }, {
	    key: 'getTarget',
	    value: function getTarget(targetId) {
	      (0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
	      return this.handlers[targetId];
	    }
	  }, {
	    key: 'getSourceType',
	    value: function getSourceType(sourceId) {
	      (0, _invariant2.default)(this.isSourceId(sourceId), 'Expected a valid source ID.');
	      return this.types[sourceId];
	    }
	  }, {
	    key: 'getTargetType',
	    value: function getTargetType(targetId) {
	      (0, _invariant2.default)(this.isTargetId(targetId), 'Expected a valid target ID.');
	      return this.types[targetId];
	    }
	  }, {
	    key: 'isSourceId',
	    value: function isSourceId(handlerId) {
	      var role = parseRoleFromHandlerId(handlerId);
	      return role === HandlerRoles.SOURCE;
	    }
	  }, {
	    key: 'isTargetId',
	    value: function isTargetId(handlerId) {
	      var role = parseRoleFromHandlerId(handlerId);
	      return role === HandlerRoles.TARGET;
	    }
	  }, {
	    key: 'removeSource',
	    value: function removeSource(sourceId) {
	      var _this2 = this;

	      (0, _invariant2.default)(this.getSource(sourceId), 'Expected an existing source.');
	      this.store.dispatch((0, _registry.removeSource)(sourceId));

	      (0, _asap2.default)(function () {
	        delete _this2.handlers[sourceId];
	        delete _this2.types[sourceId];
	      });
	    }
	  }, {
	    key: 'removeTarget',
	    value: function removeTarget(targetId) {
	      var _this3 = this;

	      (0, _invariant2.default)(this.getTarget(targetId), 'Expected an existing target.');
	      this.store.dispatch((0, _registry.removeTarget)(targetId));

	      (0, _asap2.default)(function () {
	        delete _this3.handlers[targetId];
	        delete _this3.types[targetId];
	      });
	    }
	  }, {
	    key: 'pinSource',
	    value: function pinSource(sourceId) {
	      var source = this.getSource(sourceId);
	      (0, _invariant2.default)(source, 'Expected an existing source.');

	      this.pinnedSourceId = sourceId;
	      this.pinnedSource = source;
	    }
	  }, {
	    key: 'unpinSource',
	    value: function unpinSource() {
	      (0, _invariant2.default)(this.pinnedSource, 'No source is pinned at the time.');

	      this.pinnedSourceId = null;
	      this.pinnedSource = null;
	    }
	  }]);

	  return HandlerRegistry;
	}();

	exports.default = HandlerRegistry;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(127);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getNextUniqueId;
	var nextUniqueId = 0;

	function getNextUniqueId() {
	  return nextUniqueId++;
	}

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DragSource = function () {
	  function DragSource() {
	    _classCallCheck(this, DragSource);
	  }

	  _createClass(DragSource, [{
	    key: "canDrag",
	    value: function canDrag() {
	      return true;
	    }
	  }, {
	    key: "isDragging",
	    value: function isDragging(monitor, handle) {
	      return handle === monitor.getSourceId();
	    }
	  }, {
	    key: "endDrag",
	    value: function endDrag() {}
	  }]);

	  return DragSource;
	}();

	exports.default = DragSource;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DropTarget = function () {
	  function DropTarget() {
	    _classCallCheck(this, DropTarget);
	  }

	  _createClass(DropTarget, [{
	    key: "canDrop",
	    value: function canDrop() {
	      return true;
	    }
	  }, {
	    key: "hover",
	    value: function hover() {}
	  }, {
	    key: "drop",
	    value: function drop() {}
	  }]);

	  return DropTarget;
	}();

	exports.default = DropTarget;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createBackend;

	var _noop = __webpack_require__(118);

	var _noop2 = _interopRequireDefault(_noop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestBackend = function () {
	  function TestBackend(manager) {
	    _classCallCheck(this, TestBackend);

	    this.actions = manager.getActions();
	  }

	  _createClass(TestBackend, [{
	    key: 'setup',
	    value: function setup() {
	      this.didCallSetup = true;
	    }
	  }, {
	    key: 'teardown',
	    value: function teardown() {
	      this.didCallTeardown = true;
	    }
	  }, {
	    key: 'connectDragSource',
	    value: function connectDragSource() {
	      return _noop2.default;
	    }
	  }, {
	    key: 'connectDragPreview',
	    value: function connectDragPreview() {
	      return _noop2.default;
	    }
	  }, {
	    key: 'connectDropTarget',
	    value: function connectDropTarget() {
	      return _noop2.default;
	    }
	  }, {
	    key: 'simulateBeginDrag',
	    value: function simulateBeginDrag(sourceIds, options) {
	      this.actions.beginDrag(sourceIds, options);
	    }
	  }, {
	    key: 'simulatePublishDragSource',
	    value: function simulatePublishDragSource() {
	      this.actions.publishDragSource();
	    }
	  }, {
	    key: 'simulateHover',
	    value: function simulateHover(targetIds, options) {
	      this.actions.hover(targetIds, options);
	    }
	  }, {
	    key: 'simulateDrop',
	    value: function simulateDrop() {
	      this.actions.drop();
	    }
	  }, {
	    key: 'simulateEndDrag',
	    value: function simulateEndDrag() {
	      this.actions.endDrag();
	    }
	  }]);

	  return TestBackend;
	}();

	function createBackend(manager) {
	  return new TestBackend(manager);
	}

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkDecoratorArguments;
	function checkDecoratorArguments(functionName, signature) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i += 1) {
	      var arg = arguments.length <= i + 2 ? undefined : arguments[i + 2];
	      if (arg && arg.prototype && arg.prototype.render) {
	        console.error( // eslint-disable-line no-console
	        'You seem to be applying the arguments in the wrong order. ' + ('It should be ' + functionName + '(' + signature + ')(Component), not the other way around. ') + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
	        return;
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(2);

	var _propTypes = __webpack_require__(13);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _DragDropContext = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * This class is a React-Component based version of the DragDropContext.
	 * This is an alternative to decorating an application component with an ES7 decorator.
	 */
	var DragDropContextProvider = (_temp = _class = function (_Component) {
	  _inherits(DragDropContextProvider, _Component);

	  function DragDropContextProvider(props, context) {
	    _classCallCheck(this, DragDropContextProvider);

	    var _this = _possibleConstructorReturn(this, (DragDropContextProvider.__proto__ || Object.getPrototypeOf(DragDropContextProvider)).call(this, props, context));

	    _this.backend = (0, _DragDropContext.unpackBackendForEs5Users)(props.backend);
	    return _this;
	  }

	  _createClass(DragDropContextProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var _this2 = this;

	      /**
	       * This property determines which window global to use for creating the DragDropManager.
	       * If a window has been injected explicitly via props, that is used first. If it is available
	       * as a context value, then use that, otherwise use the browser global.
	       */
	      var getWindow = function getWindow() {
	        if (_this2.props && _this2.props.window) {
	          return _this2.props.window;
	        } else if (_this2.context && _this2.context.window) {
	          return _this2.context.window;
	        } else if (typeof window !== 'undefined') {
	          return window;
	        }
	        return undefined;
	      };

	      return (0, _DragDropContext.createChildContext)(this.backend, { window: getWindow() });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react.Children.only(this.props.children);
	    }
	  }]);

	  return DragDropContextProvider;
	}(_react.Component), _class.propTypes = {
	  backend: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
	  children: _propTypes2.default.element.isRequired,
	  window: _propTypes2.default.object }, _class.defaultProps = {
	  window: undefined
	}, _class.childContextTypes = _DragDropContext.CHILD_CONTEXT_TYPES, _class.displayName = 'DragDropContextProvider', _class.contextTypes = {
	  window: _propTypes2.default.object
	}, _temp);
	exports.default = DragDropContextProvider;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = DragLayer;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(13);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _hoistNonReactStatics = __webpack_require__(132);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _isPlainObject = __webpack_require__(25);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _shallowEqual = __webpack_require__(136);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _shallowEqualScalar = __webpack_require__(137);

	var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

	var _checkDecoratorArguments = __webpack_require__(133);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function DragLayer(collect) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  _checkDecoratorArguments2.default.apply(undefined, ['DragLayer', 'collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
	  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the first argument to DragLayer ' + 'to be a function that collects props to inject into the component. ', 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);
	  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the second argument to DragLayer to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);

	  return function decorateLayer(DecoratedComponent) {
	    var _class, _temp;

	    var _options$arePropsEqua = options.arePropsEqual,
	        arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

	    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	    var DragLayerContainer = (_temp = _class = function (_Component) {
	      _inherits(DragLayerContainer, _Component);

	      _createClass(DragLayerContainer, [{
	        key: 'getDecoratedComponentInstance',
	        value: function getDecoratedComponentInstance() {
	          (0, _invariant2.default)(this.child, 'In order to access an instance of the decorated component it can ' + 'not be a stateless component.');
	          return this.child;
	        }
	      }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	          return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
	        }
	      }]);

	      function DragLayerContainer(props, context) {
	        _classCallCheck(this, DragLayerContainer);

	        var _this = _possibleConstructorReturn(this, (DragLayerContainer.__proto__ || Object.getPrototypeOf(DragLayerContainer)).call(this, props));

	        _this.handleChange = _this.handleChange.bind(_this);

	        _this.manager = context.dragDropManager;
	        (0, _invariant2.default)(_typeof(_this.manager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	        _this.state = _this.getCurrentState();
	        return _this;
	      }

	      _createClass(DragLayerContainer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          this.isCurrentlyMounted = true;

	          var monitor = this.manager.getMonitor();
	          this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);
	          this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);

	          this.handleChange();
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          this.isCurrentlyMounted = false;

	          this.unsubscribeFromOffsetChange();
	          this.unsubscribeFromStateChange();
	        }
	      }, {
	        key: 'handleChange',
	        value: function handleChange() {
	          if (!this.isCurrentlyMounted) {
	            return;
	          }

	          var nextState = this.getCurrentState();
	          if (!(0, _shallowEqual2.default)(nextState, this.state)) {
	            this.setState(nextState);
	          }
	        }
	      }, {
	        key: 'getCurrentState',
	        value: function getCurrentState() {
	          var monitor = this.manager.getMonitor();
	          return collect(monitor);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _this2 = this;

	          return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	            ref: function ref(child) {
	              return _this2.child = child;
	            }
	          }));
	        }
	      }]);

	      return DragLayerContainer;
	    }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = 'DragLayer(' + displayName + ')', _class.contextTypes = {
	      dragDropManager: _propTypes2.default.object.isRequired
	    }, _temp);


	    return (0, _hoistNonReactStatics2.default)(DragLayerContainer, DecoratedComponent);
	  };
	}

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i += 1) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }),
/* 137 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = shallowEqualScalar;
	function shallowEqualScalar(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i += 1) {
	    if (!hasOwn.call(objB, keysA[i])) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB || (typeof valA === 'undefined' ? 'undefined' : _typeof(valA)) === 'object' || (typeof valB === 'undefined' ? 'undefined' : _typeof(valB)) === 'object') {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DragSource;

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(25);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _checkDecoratorArguments = __webpack_require__(133);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	var _decorateHandler = __webpack_require__(139);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerSource = __webpack_require__(145);

	var _registerSource2 = _interopRequireDefault(_registerSource);

	var _createSourceFactory = __webpack_require__(146);

	var _createSourceFactory2 = _interopRequireDefault(_createSourceFactory);

	var _createSourceMonitor = __webpack_require__(147);

	var _createSourceMonitor2 = _interopRequireDefault(_createSourceMonitor);

	var _createSourceConnector = __webpack_require__(148);

	var _createSourceConnector2 = _interopRequireDefault(_createSourceConnector);

	var _isValidType = __webpack_require__(152);

	var _isValidType2 = _interopRequireDefault(_isValidType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DragSource(type, spec, collect) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  _checkDecoratorArguments2.default.apply(undefined, ['DragSource', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
	  var getType = type;
	  if (typeof type !== 'function') {
	    (0, _invariant2.default)((0, _isValidType2.default)(type), 'Expected "type" provided as the first argument to DragSource to be ' + 'a string, or a function that returns a string given the current props. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);
	    getType = function getType() {
	      return type;
	    };
	  }
	  (0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DragSource to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);
	  var createSource = (0, _createSourceFactory2.default)(spec);
	  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DragSource to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);
	  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DragSource to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);

	  return function decorateSource(DecoratedComponent) {
	    return (0, _decorateHandler2.default)({
	      connectBackend: function connectBackend(backend, sourceId) {
	        return backend.connectDragSource(sourceId);
	      },
	      containerDisplayName: 'DragSource',
	      createHandler: createSource,
	      registerHandler: _registerSource2.default,
	      createMonitor: _createSourceMonitor2.default,
	      createConnector: _createSourceConnector2.default,
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = decorateHandler;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(13);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _disposables = __webpack_require__(140);

	var _isPlainObject = __webpack_require__(25);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _hoistNonReactStatics = __webpack_require__(132);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _shallowEqual = __webpack_require__(136);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _shallowEqualScalar = __webpack_require__(137);

	var _shallowEqualScalar2 = _interopRequireDefault(_shallowEqualScalar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function decorateHandler(_ref) {
	  var _class, _temp;

	  var DecoratedComponent = _ref.DecoratedComponent,
	      createHandler = _ref.createHandler,
	      createMonitor = _ref.createMonitor,
	      createConnector = _ref.createConnector,
	      registerHandler = _ref.registerHandler,
	      containerDisplayName = _ref.containerDisplayName,
	      getType = _ref.getType,
	      collect = _ref.collect,
	      options = _ref.options;
	  var _options$arePropsEqua = options.arePropsEqual,
	      arePropsEqual = _options$arePropsEqua === undefined ? _shallowEqualScalar2.default : _options$arePropsEqua;

	  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

	  var DragDropContainer = (_temp = _class = function (_Component) {
	    _inherits(DragDropContainer, _Component);

	    _createClass(DragDropContainer, [{
	      key: 'getHandlerId',
	      value: function getHandlerId() {
	        return this.handlerId;
	      }
	    }, {
	      key: 'getDecoratedComponentInstance',
	      value: function getDecoratedComponentInstance() {
	        return this.decoratedComponentInstance;
	      }
	    }, {
	      key: 'shouldComponentUpdate',
	      value: function shouldComponentUpdate(nextProps, nextState) {
	        return !arePropsEqual(nextProps, this.props) || !(0, _shallowEqual2.default)(nextState, this.state);
	      }
	    }]);

	    function DragDropContainer(props, context) {
	      _classCallCheck(this, DragDropContainer);

	      var _this = _possibleConstructorReturn(this, (DragDropContainer.__proto__ || Object.getPrototypeOf(DragDropContainer)).call(this, props, context));

	      _this.handleChange = _this.handleChange.bind(_this);
	      _this.handleChildRef = _this.handleChildRef.bind(_this);

	      (0, _invariant2.default)(_typeof(_this.context.dragDropManager) === 'object', 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to wrap the top-level component of your app with DragDropContext. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

	      _this.manager = _this.context.dragDropManager;
	      _this.handlerMonitor = createMonitor(_this.manager);
	      _this.handlerConnector = createConnector(_this.manager.getBackend());
	      _this.handler = createHandler(_this.handlerMonitor);

	      _this.disposable = new _disposables.SerialDisposable();
	      _this.receiveProps(props);
	      _this.state = _this.getCurrentState();
	      _this.dispose();
	      return _this;
	    }

	    _createClass(DragDropContainer, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.isCurrentlyMounted = true;
	        this.disposable = new _disposables.SerialDisposable();
	        this.currentType = null;
	        this.receiveProps(this.props);
	        this.handleChange();
	      }
	    }, {
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(nextProps) {
	        if (!arePropsEqual(nextProps, this.props)) {
	          this.receiveProps(nextProps);
	          this.handleChange();
	        }
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        this.dispose();
	        this.isCurrentlyMounted = false;
	      }
	    }, {
	      key: 'receiveProps',
	      value: function receiveProps(props) {
	        this.handler.receiveProps(props);
	        this.receiveType(getType(props));
	      }
	    }, {
	      key: 'receiveType',
	      value: function receiveType(type) {
	        if (type === this.currentType) {
	          return;
	        }

	        this.currentType = type;

	        var _registerHandler = registerHandler(type, this.handler, this.manager),
	            handlerId = _registerHandler.handlerId,
	            unregister = _registerHandler.unregister;

	        this.handlerId = handlerId;
	        this.handlerMonitor.receiveHandlerId(handlerId);
	        this.handlerConnector.receiveHandlerId(handlerId);

	        var globalMonitor = this.manager.getMonitor();
	        var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });

	        this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe), new _disposables.Disposable(unregister)));
	      }
	    }, {
	      key: 'handleChange',
	      value: function handleChange() {
	        if (!this.isCurrentlyMounted) {
	          return;
	        }

	        var nextState = this.getCurrentState();
	        if (!(0, _shallowEqual2.default)(nextState, this.state)) {
	          this.setState(nextState);
	        }
	      }
	    }, {
	      key: 'dispose',
	      value: function dispose() {
	        this.disposable.dispose();
	        this.handlerConnector.receiveHandlerId(null);
	      }
	    }, {
	      key: 'handleChildRef',
	      value: function handleChildRef(component) {
	        this.decoratedComponentInstance = component;
	        this.handler.receiveComponent(component);
	      }
	    }, {
	      key: 'getCurrentState',
	      value: function getCurrentState() {
	        var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);

	        if (process.env.NODE_ENV !== 'production') {
	          (0, _invariant2.default)((0, _isPlainObject2.default)(nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
	        }

	        return nextState;
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(DecoratedComponent, _extends({}, this.props, this.state, {
	          ref: this.handleChildRef
	        }));
	      }
	    }]);

	    return DragDropContainer;
	  }(_react.Component), _class.DecoratedComponent = DecoratedComponent, _class.displayName = containerDisplayName + '(' + displayName + ')', _class.contextTypes = {
	    dragDropManager: _propTypes2.default.object.isRequired
	  }, _temp);


	  return (0, _hoistNonReactStatics2.default)(DragDropContainer, DecoratedComponent);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	exports.__esModule = true;

	var _isDisposable2 = __webpack_require__(141);

	var _isDisposable3 = _interopRequireWildcard(_isDisposable2);

	exports.isDisposable = _isDisposable3['default'];

	var _Disposable2 = __webpack_require__(142);

	var _Disposable3 = _interopRequireWildcard(_Disposable2);

	exports.Disposable = _Disposable3['default'];

	var _CompositeDisposable2 = __webpack_require__(143);

	var _CompositeDisposable3 = _interopRequireWildcard(_CompositeDisposable2);

	exports.CompositeDisposable = _CompositeDisposable3['default'];

	var _SerialDisposable2 = __webpack_require__(144);

	var _SerialDisposable3 = _interopRequireWildcard(_SerialDisposable2);

	exports.SerialDisposable = _SerialDisposable3['default'];

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isDisposable;

	function isDisposable(obj) {
	  return Boolean(obj && typeof obj.dispose === 'function');
	}

	module.exports = exports['default'];

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.__esModule = true;
	var noop = function noop() {};

	/**
	 * The basic disposable.
	 */

	var Disposable = (function () {
	  function Disposable(action) {
	    _classCallCheck(this, Disposable);

	    this.isDisposed = false;
	    this.action = action || noop;
	  }

	  Disposable.prototype.dispose = function dispose() {
	    if (!this.isDisposed) {
	      this.action.call(null);
	      this.isDisposed = true;
	    }
	  };

	  _createClass(Disposable, null, [{
	    key: "empty",
	    enumerable: true,
	    value: { dispose: noop }
	  }]);

	  return Disposable;
	})();

	exports["default"] = Disposable;
	module.exports = exports["default"];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(141);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	/**
	 * Represents a group of disposable resources that are disposed together.
	 */

	var CompositeDisposable = (function () {
	  function CompositeDisposable() {
	    for (var _len = arguments.length, disposables = Array(_len), _key = 0; _key < _len; _key++) {
	      disposables[_key] = arguments[_key];
	    }

	    _classCallCheck(this, CompositeDisposable);

	    if (Array.isArray(disposables[0]) && disposables.length === 1) {
	      disposables = disposables[0];
	    }

	    for (var i = 0; i < disposables.length; i++) {
	      if (!_isDisposable2['default'](disposables[i])) {
	        throw new Error('Expected a disposable');
	      }
	    }

	    this.disposables = disposables;
	    this.isDisposed = false;
	  }

	  /**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Disposable} item Disposable to add.
	   */

	  CompositeDisposable.prototype.add = function add(item) {
	    if (this.isDisposed) {
	      item.dispose();
	    } else {
	      this.disposables.push(item);
	    }
	  };

	  /**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Disposable} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */

	  CompositeDisposable.prototype.remove = function remove(item) {
	    if (this.isDisposed) {
	      return false;
	    }

	    var index = this.disposables.indexOf(item);
	    if (index === -1) {
	      return false;
	    }

	    this.disposables.splice(index, 1);
	    item.dispose();
	    return true;
	  };

	  /**
	   * Disposes all disposables in the group and removes them from the group.
	   */

	  CompositeDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    var len = this.disposables.length;
	    var currentDisposables = new Array(len);
	    for (var i = 0; i < len; i++) {
	      currentDisposables[i] = this.disposables[i];
	    }

	    this.isDisposed = true;
	    this.disposables = [];
	    this.length = 0;

	    for (var i = 0; i < len; i++) {
	      currentDisposables[i].dispose();
	    }
	  };

	  return CompositeDisposable;
	})();

	exports['default'] = CompositeDisposable;
	module.exports = exports['default'];

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	exports.__esModule = true;

	var _isDisposable = __webpack_require__(141);

	var _isDisposable2 = _interopRequireWildcard(_isDisposable);

	var SerialDisposable = (function () {
	  function SerialDisposable() {
	    _classCallCheck(this, SerialDisposable);

	    this.isDisposed = false;
	    this.current = null;
	  }

	  /**
	   * Gets the underlying disposable.
	   * @return The underlying disposable.
	   */

	  SerialDisposable.prototype.getDisposable = function getDisposable() {
	    return this.current;
	  };

	  /**
	   * Sets the underlying disposable.
	   * @param {Disposable} value The new underlying disposable.
	   */

	  SerialDisposable.prototype.setDisposable = function setDisposable() {
	    var value = arguments[0] === undefined ? null : arguments[0];

	    if (value != null && !_isDisposable2['default'](value)) {
	      throw new Error('Expected either an empty value or a valid disposable');
	    }

	    var isDisposed = this.isDisposed;
	    var previous = undefined;

	    if (!isDisposed) {
	      previous = this.current;
	      this.current = value;
	    }

	    if (previous) {
	      previous.dispose();
	    }

	    if (isDisposed && value) {
	      value.dispose();
	    }
	  };

	  /**
	   * Disposes the underlying disposable as well as all future replacements.
	   */

	  SerialDisposable.prototype.dispose = function dispose() {
	    if (this.isDisposed) {
	      return;
	    }

	    this.isDisposed = true;
	    var previous = this.current;
	    this.current = null;

	    if (previous) {
	      previous.dispose();
	    }
	  };

	  return SerialDisposable;
	})();

	exports['default'] = SerialDisposable;
	module.exports = exports['default'];

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = registerSource;
	function registerSource(type, source, manager) {
	  var registry = manager.getRegistry();
	  var sourceId = registry.addSource(type, source);

	  function unregisterSource() {
	    registry.removeSource(sourceId);
	  }

	  return {
	    handlerId: sourceId,
	    unregister: unregisterSource
	  };
	}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createSourceFactory;

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(25);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];
	var REQUIRED_SPEC_METHODS = ['beginDrag'];

	function createSourceFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    (0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });
	  REQUIRED_SPEC_METHODS.forEach(function (key) {
	    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);
	  });

	  var Source = function () {
	    function Source(monitor) {
	      _classCallCheck(this, Source);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    _createClass(Source, [{
	      key: 'receiveProps',
	      value: function receiveProps(props) {
	        this.props = props;
	      }
	    }, {
	      key: 'receiveComponent',
	      value: function receiveComponent(component) {
	        this.component = component;
	      }
	    }, {
	      key: 'canDrag',
	      value: function canDrag() {
	        if (!spec.canDrag) {
	          return true;
	        }

	        return spec.canDrag(this.props, this.monitor);
	      }
	    }, {
	      key: 'isDragging',
	      value: function isDragging(globalMonitor, sourceId) {
	        if (!spec.isDragging) {
	          return sourceId === globalMonitor.getSourceId();
	        }

	        return spec.isDragging(this.props, this.monitor);
	      }
	    }, {
	      key: 'beginDrag',
	      value: function beginDrag() {
	        var item = spec.beginDrag(this.props, this.monitor, this.component);
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _invariant2.default)((0, _isPlainObject2.default)(item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', item);
	        }
	        return item;
	      }
	    }, {
	      key: 'endDrag',
	      value: function endDrag() {
	        if (!spec.endDrag) {
	          return;
	        }

	        spec.endDrag(this.props, this.monitor, this.component);
	      }
	    }]);

	    return Source;
	  }();

	  return function createSource(monitor) {
	    return new Source(monitor);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createSourceMonitor;

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var isCallingCanDrag = false;
	var isCallingIsDragging = false;

	var SourceMonitor = function () {
	  function SourceMonitor(manager) {
	    _classCallCheck(this, SourceMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  _createClass(SourceMonitor, [{
	    key: 'receiveHandlerId',
	    value: function receiveHandlerId(sourceId) {
	      this.sourceId = sourceId;
	    }
	  }, {
	    key: 'canDrag',
	    value: function canDrag() {
	      (0, _invariant2.default)(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

	      try {
	        isCallingCanDrag = true;
	        return this.internalMonitor.canDragSource(this.sourceId);
	      } finally {
	        isCallingCanDrag = false;
	      }
	    }
	  }, {
	    key: 'isDragging',
	    value: function isDragging() {
	      (0, _invariant2.default)(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');

	      try {
	        isCallingIsDragging = true;
	        return this.internalMonitor.isDraggingSource(this.sourceId);
	      } finally {
	        isCallingIsDragging = false;
	      }
	    }
	  }, {
	    key: 'getItemType',
	    value: function getItemType() {
	      return this.internalMonitor.getItemType();
	    }
	  }, {
	    key: 'getItem',
	    value: function getItem() {
	      return this.internalMonitor.getItem();
	    }
	  }, {
	    key: 'getDropResult',
	    value: function getDropResult() {
	      return this.internalMonitor.getDropResult();
	    }
	  }, {
	    key: 'didDrop',
	    value: function didDrop() {
	      return this.internalMonitor.didDrop();
	    }
	  }, {
	    key: 'getInitialClientOffset',
	    value: function getInitialClientOffset() {
	      return this.internalMonitor.getInitialClientOffset();
	    }
	  }, {
	    key: 'getInitialSourceClientOffset',
	    value: function getInitialSourceClientOffset() {
	      return this.internalMonitor.getInitialSourceClientOffset();
	    }
	  }, {
	    key: 'getSourceClientOffset',
	    value: function getSourceClientOffset() {
	      return this.internalMonitor.getSourceClientOffset();
	    }
	  }, {
	    key: 'getClientOffset',
	    value: function getClientOffset() {
	      return this.internalMonitor.getClientOffset();
	    }
	  }, {
	    key: 'getDifferenceFromInitialOffset',
	    value: function getDifferenceFromInitialOffset() {
	      return this.internalMonitor.getDifferenceFromInitialOffset();
	    }
	  }]);

	  return SourceMonitor;
	}();

	function createSourceMonitor(manager) {
	  return new SourceMonitor(manager);
	}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSourceConnector;

	var _wrapConnectorHooks = __webpack_require__(149);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(151);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createSourceConnector(backend) {
	  var currentHandlerId = void 0;

	  var currentDragSourceNode = void 0;
	  var currentDragSourceOptions = void 0;
	  var disconnectCurrentDragSource = void 0;

	  var currentDragPreviewNode = void 0;
	  var currentDragPreviewOptions = void 0;
	  var disconnectCurrentDragPreview = void 0;

	  function reconnectDragSource() {
	    if (disconnectCurrentDragSource) {
	      disconnectCurrentDragSource();
	      disconnectCurrentDragSource = null;
	    }

	    if (currentHandlerId && currentDragSourceNode) {
	      disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);
	    }
	  }

	  function reconnectDragPreview() {
	    if (disconnectCurrentDragPreview) {
	      disconnectCurrentDragPreview();
	      disconnectCurrentDragPreview = null;
	    }

	    if (currentHandlerId && currentDragPreviewNode) {
	      disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);
	    }
	  }

	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }

	    currentHandlerId = handlerId;
	    reconnectDragSource();
	    reconnectDragPreview();
	  }

	  var hooks = (0, _wrapConnectorHooks2.default)({
	    dragSource: function connectDragSource(node, options) {
	      if (node === currentDragSourceNode && (0, _areOptionsEqual2.default)(options, currentDragSourceOptions)) {
	        return;
	      }

	      currentDragSourceNode = node;
	      currentDragSourceOptions = options;

	      reconnectDragSource();
	    },

	    dragPreview: function connectDragPreview(node, options) {
	      if (node === currentDragPreviewNode && (0, _areOptionsEqual2.default)(options, currentDragPreviewOptions)) {
	        return;
	      }

	      currentDragPreviewNode = node;
	      currentDragPreviewOptions = options;

	      reconnectDragPreview();
	    }
	  });

	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = wrapConnectorHooks;

	var _react = __webpack_require__(2);

	var _cloneWithRef = __webpack_require__(150);

	var _cloneWithRef2 = _interopRequireDefault(_cloneWithRef);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function throwIfCompositeComponentElement(element) {
	  // Custom components can no longer be wrapped directly in React DnD 2.0
	  // so that we don't need to depend on findDOMNode() from react-dom.
	  if (typeof element.type === 'string') {
	    return;
	  }

	  var displayName = element.type.displayName || element.type.name || 'the component';

	  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + ('You can either wrap ' + displayName + ' into a <div>, or turn it into a ') + 'drag source or a drop target itself.');
	}

	function wrapHookToRecognizeElement(hook) {
	  return function () {
	    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	    // When passed a node, call the hook straight away.
	    if (!(0, _react.isValidElement)(elementOrNode)) {
	      var node = elementOrNode;
	      hook(node, options);
	      return undefined;
	    }

	    // If passed a ReactElement, clone it and attach this function as a ref.
	    // This helps us achieve a neat API where user doesn't even know that refs
	    // are being used under the hood.
	    var element = elementOrNode;
	    throwIfCompositeComponentElement(element);

	    // When no options are passed, use the hook directly
	    var ref = options ? function (node) {
	      return hook(node, options);
	    } : hook;

	    return (0, _cloneWithRef2.default)(element, ref);
	  };
	}

	function wrapConnectorHooks(hooks) {
	  var wrappedHooks = {};

	  Object.keys(hooks).forEach(function (key) {
	    var hook = hooks[key];
	    var wrappedHook = wrapHookToRecognizeElement(hook);
	    wrappedHooks[key] = function () {
	      return wrappedHook;
	    };
	  });

	  return wrappedHooks;
	}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cloneWithRef;

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function cloneWithRef(element, newRef) {
	  var previousRef = element.ref;
	  (0, _invariant2.default)(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

	  if (!previousRef) {
	    // When there is no ref on the element, use the new ref directly
	    return (0, _react.cloneElement)(element, {
	      ref: newRef
	    });
	  }

	  return (0, _react.cloneElement)(element, {
	    ref: function ref(node) {
	      newRef(node);

	      if (previousRef) {
	        previousRef(node);
	      }
	    }
	  });
	}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = areOptionsEqual;

	var _shallowEqual = __webpack_require__(136);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function areOptionsEqual(nextOptions, currentOptions) {
	  if (currentOptions === nextOptions) {
	    return true;
	  }

	  return currentOptions !== null && nextOptions !== null && (0, _shallowEqual2.default)(currentOptions, nextOptions);
	}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	       value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = isValidType;

	var _isArray = __webpack_require__(43);

	var _isArray2 = _interopRequireDefault(_isArray);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidType(type, allowArray) {
	       return typeof type === 'string' || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'symbol' || allowArray && (0, _isArray2.default)(type) && type.every(function (t) {
	              return isValidType(t, false);
	       });
	}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DropTarget;

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(25);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _checkDecoratorArguments = __webpack_require__(133);

	var _checkDecoratorArguments2 = _interopRequireDefault(_checkDecoratorArguments);

	var _decorateHandler = __webpack_require__(139);

	var _decorateHandler2 = _interopRequireDefault(_decorateHandler);

	var _registerTarget = __webpack_require__(154);

	var _registerTarget2 = _interopRequireDefault(_registerTarget);

	var _createTargetFactory = __webpack_require__(155);

	var _createTargetFactory2 = _interopRequireDefault(_createTargetFactory);

	var _createTargetMonitor = __webpack_require__(156);

	var _createTargetMonitor2 = _interopRequireDefault(_createTargetMonitor);

	var _createTargetConnector = __webpack_require__(157);

	var _createTargetConnector2 = _interopRequireDefault(_createTargetConnector);

	var _isValidType = __webpack_require__(152);

	var _isValidType2 = _interopRequireDefault(_isValidType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function DropTarget(type, spec, collect) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  _checkDecoratorArguments2.default.apply(undefined, ['DropTarget', 'type, spec, collect[, options]'].concat(Array.prototype.slice.call(arguments))); // eslint-disable-line prefer-rest-params
	  var getType = type;
	  if (typeof type !== 'function') {
	    (0, _invariant2.default)((0, _isValidType2.default)(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);
	    getType = function getType() {
	      return type;
	    };
	  }
	  (0, _invariant2.default)((0, _isPlainObject2.default)(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);
	  var createTarget = (0, _createTargetFactory2.default)(spec);
	  (0, _invariant2.default)(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);
	  (0, _invariant2.default)((0, _isPlainObject2.default)(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);

	  return function decorateTarget(DecoratedComponent) {
	    return (0, _decorateHandler2.default)({
	      connectBackend: function connectBackend(backend, targetId) {
	        return backend.connectDropTarget(targetId);
	      },
	      containerDisplayName: 'DropTarget',
	      createHandler: createTarget,
	      registerHandler: _registerTarget2.default,
	      createMonitor: _createTargetMonitor2.default,
	      createConnector: _createTargetConnector2.default,
	      DecoratedComponent: DecoratedComponent,
	      getType: getType,
	      collect: collect,
	      options: options
	    });
	  };
	}

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = registerTarget;
	function registerTarget(type, target, manager) {
	  var registry = manager.getRegistry();
	  var targetId = registry.addTarget(type, target);

	  function unregisterTarget() {
	    registry.removeTarget(targetId);
	  }

	  return {
	    handlerId: targetId,
	    unregister: unregisterTarget
	  };
	}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createTargetFactory;

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _isPlainObject = __webpack_require__(25);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];

	function createTargetFactory(spec) {
	  Object.keys(spec).forEach(function (key) {
	    (0, _invariant2.default)(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);
	    (0, _invariant2.default)(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);
	  });

	  var Target = function () {
	    function Target(monitor) {
	      _classCallCheck(this, Target);

	      this.monitor = monitor;
	      this.props = null;
	      this.component = null;
	    }

	    _createClass(Target, [{
	      key: 'receiveProps',
	      value: function receiveProps(props) {
	        this.props = props;
	      }
	    }, {
	      key: 'receiveMonitor',
	      value: function receiveMonitor(monitor) {
	        this.monitor = monitor;
	      }
	    }, {
	      key: 'receiveComponent',
	      value: function receiveComponent(component) {
	        this.component = component;
	      }
	    }, {
	      key: 'canDrop',
	      value: function canDrop() {
	        if (!spec.canDrop) {
	          return true;
	        }

	        return spec.canDrop(this.props, this.monitor);
	      }
	    }, {
	      key: 'hover',
	      value: function hover() {
	        if (!spec.hover) {
	          return;
	        }

	        spec.hover(this.props, this.monitor, this.component);
	      }
	    }, {
	      key: 'drop',
	      value: function drop() {
	        if (!spec.drop) {
	          return undefined;
	        }

	        var dropResult = spec.drop(this.props, this.monitor, this.component);
	        if (process.env.NODE_ENV !== 'production') {
	          (0, _invariant2.default)(typeof dropResult === 'undefined' || (0, _isPlainObject2.default)(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', dropResult);
	        }
	        return dropResult;
	      }
	    }]);

	    return Target;
	  }();

	  return function createTarget(monitor) {
	    return new Target(monitor);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = createTargetMonitor;

	var _invariant = __webpack_require__(42);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var isCallingCanDrop = false;

	var TargetMonitor = function () {
	  function TargetMonitor(manager) {
	    _classCallCheck(this, TargetMonitor);

	    this.internalMonitor = manager.getMonitor();
	  }

	  _createClass(TargetMonitor, [{
	    key: 'receiveHandlerId',
	    value: function receiveHandlerId(targetId) {
	      this.targetId = targetId;
	    }
	  }, {
	    key: 'canDrop',
	    value: function canDrop() {
	      (0, _invariant2.default)(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');

	      try {
	        isCallingCanDrop = true;
	        return this.internalMonitor.canDropOnTarget(this.targetId);
	      } finally {
	        isCallingCanDrop = false;
	      }
	    }
	  }, {
	    key: 'isOver',
	    value: function isOver(options) {
	      return this.internalMonitor.isOverTarget(this.targetId, options);
	    }
	  }, {
	    key: 'getItemType',
	    value: function getItemType() {
	      return this.internalMonitor.getItemType();
	    }
	  }, {
	    key: 'getItem',
	    value: function getItem() {
	      return this.internalMonitor.getItem();
	    }
	  }, {
	    key: 'getDropResult',
	    value: function getDropResult() {
	      return this.internalMonitor.getDropResult();
	    }
	  }, {
	    key: 'didDrop',
	    value: function didDrop() {
	      return this.internalMonitor.didDrop();
	    }
	  }, {
	    key: 'getInitialClientOffset',
	    value: function getInitialClientOffset() {
	      return this.internalMonitor.getInitialClientOffset();
	    }
	  }, {
	    key: 'getInitialSourceClientOffset',
	    value: function getInitialSourceClientOffset() {
	      return this.internalMonitor.getInitialSourceClientOffset();
	    }
	  }, {
	    key: 'getSourceClientOffset',
	    value: function getSourceClientOffset() {
	      return this.internalMonitor.getSourceClientOffset();
	    }
	  }, {
	    key: 'getClientOffset',
	    value: function getClientOffset() {
	      return this.internalMonitor.getClientOffset();
	    }
	  }, {
	    key: 'getDifferenceFromInitialOffset',
	    value: function getDifferenceFromInitialOffset() {
	      return this.internalMonitor.getDifferenceFromInitialOffset();
	    }
	  }]);

	  return TargetMonitor;
	}();

	function createTargetMonitor(manager) {
	  return new TargetMonitor(manager);
	}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createTargetConnector;

	var _wrapConnectorHooks = __webpack_require__(149);

	var _wrapConnectorHooks2 = _interopRequireDefault(_wrapConnectorHooks);

	var _areOptionsEqual = __webpack_require__(151);

	var _areOptionsEqual2 = _interopRequireDefault(_areOptionsEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTargetConnector(backend) {
	  var currentHandlerId = void 0;

	  var currentDropTargetNode = void 0;
	  var currentDropTargetOptions = void 0;
	  var disconnectCurrentDropTarget = void 0;

	  function reconnectDropTarget() {
	    if (disconnectCurrentDropTarget) {
	      disconnectCurrentDropTarget();
	      disconnectCurrentDropTarget = null;
	    }

	    if (currentHandlerId && currentDropTargetNode) {
	      disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);
	    }
	  }

	  function receiveHandlerId(handlerId) {
	    if (handlerId === currentHandlerId) {
	      return;
	    }

	    currentHandlerId = handlerId;
	    reconnectDropTarget();
	  }

	  var hooks = (0, _wrapConnectorHooks2.default)({
	    dropTarget: function connectDropTarget(node, options) {
	      if (node === currentDropTargetNode && (0, _areOptionsEqual2.default)(options, currentDropTargetOptions)) {
	        return;
	      }

	      currentDropTargetNode = node;
	      currentDropTargetOptions = options;

	      reconnectDropTarget();
	    }
	  });

	  return {
	    receiveHandlerId: receiveHandlerId,
	    hooks: hooks
	  };
	}

/***/ }),
/* 158 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _default = {
	  ROW: 'row'
	};
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/RowTypes.js');
	}();

	;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _reactDnd = __webpack_require__(11);

	var _RowTypes = __webpack_require__(158);

	var _RowTypes2 = _interopRequireDefault(_RowTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var rowSource = {
	  beginDrag: function beginDrag(props) {
	    return {
	      rIndex: props.rIndex
	    };
	  },
	  endDrag: function endDrag(props, monitor) {
	    if (props.onDroppedRow) {
	      var dragIndex = props.rIndex;
	      var dropIndex = monitor.getItem().rIndex;
	      props.onDroppedRow(dragIndex, dropIndex);
	    }
	  }
	};

	var TableColumn = (_dec = (0, _reactDnd.DragSource)(_RowTypes2.default.ROW, rowSource, function (connect, monitor) {
	  return {
	    connectDragSource: connect.dragSource()
	  };
	}), _dec(_class = function (_Component) {
	  _inherits(TableColumn, _Component);

	  function TableColumn(props) {
	    _classCallCheck(this, TableColumn);

	    var _this = _possibleConstructorReturn(this, (TableColumn.__proto__ || Object.getPrototypeOf(TableColumn)).call(this, props));

	    _this.handleCellEdit = function () {
	      return _this.__handleCellEdit__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleCellClick = function () {
	      return _this.__handleCellClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleKeyDown = function () {
	      return _this.__handleKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    return _this;
	  }
	  /* eslint no-unused-vars: [0, { "args": "after-used" }] */


	  _createClass(TableColumn, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var children = this.props.children;

	      var shouldUpdated = this.props.width !== nextProps.width || this.props.className !== nextProps.className || this.props.hidden !== nextProps.hidden || this.props.dataAlign !== nextProps.dataAlign || this.props.isFocus !== nextProps.isFocus || (typeof children === 'undefined' ? 'undefined' : _typeof(children)) !== _typeof(nextProps.children) || ('' + this.props.onEdit).toString() !== ('' + nextProps.onEdit).toString();

	      if (shouldUpdated) {
	        return shouldUpdated;
	      }

	      if ((typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object' && children !== null && children.props !== null) {
	        if (children.props.type === 'checkbox' || children.props.type === 'radio') {
	          shouldUpdated = shouldUpdated || children.props.type !== nextProps.children.props.type || children.props.checked !== nextProps.children.props.checked || children.props.disabled !== nextProps.children.props.disabled;
	        } else {
	          shouldUpdated = true;
	        }
	      } else {
	        shouldUpdated = shouldUpdated || children !== nextProps.children;
	      }

	      if (shouldUpdated) {
	        return shouldUpdated;
	      }

	      if (!(this.props.cellEdit && nextProps.cellEdit)) {
	        return false;
	      } else {
	        return shouldUpdated || this.props.cellEdit.mode !== nextProps.cellEdit.mode;
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var dom = _reactDom2.default.findDOMNode(this);
	      if (this.props.isFocus) {
	        dom.focus();
	      } else {
	        dom.blur();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var dom = _reactDom2.default.findDOMNode(this);
	      if (this.props.isFocus) {
	        dom.focus();
	      } else {
	        dom.blur();
	      }
	    }
	  }, {
	    key: '__handleCellEdit__REACT_HOT_LOADER__',
	    value: function __handleCellEdit__REACT_HOT_LOADER__() {
	      return this.__handleCellEdit__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellEdit__REACT_HOT_LOADER__',
	    value: function __handleCellEdit__REACT_HOT_LOADER__() {
	      return this.__handleCellEdit__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellEdit__REACT_HOT_LOADER__',
	    value: function __handleCellEdit__REACT_HOT_LOADER__() {
	      return this.__handleCellEdit__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellEdit__REACT_HOT_LOADER__',
	    value: function __handleCellEdit__REACT_HOT_LOADER__(e) {
	      if (this.props.cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK) {
	        if (document.selection && document.selection.empty) {
	          document.selection.empty();
	        } else if (window.getSelection) {
	          var sel = window.getSelection();
	          sel.removeAllRanges();
	        }
	      }
	      this.props.onEdit(this.props.rIndex + 1, e.currentTarget.cellIndex, e);
	      if (this.props.cellEdit.mode !== _Const2.default.CELL_EDIT_DBCLICK) {
	        this.props.onClick(this.props.rIndex + 1, e.currentTarget.cellIndex, e);
	      }
	    }
	  }, {
	    key: '__handleCellClick__REACT_HOT_LOADER__',
	    value: function __handleCellClick__REACT_HOT_LOADER__() {
	      return this.__handleCellClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellClick__REACT_HOT_LOADER__',
	    value: function __handleCellClick__REACT_HOT_LOADER__() {
	      return this.__handleCellClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellClick__REACT_HOT_LOADER__',
	    value: function __handleCellClick__REACT_HOT_LOADER__() {
	      return this.__handleCellClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCellClick__REACT_HOT_LOADER__',
	    value: function __handleCellClick__REACT_HOT_LOADER__(e) {
	      var _props = this.props,
	          onClick = _props.onClick,
	          rIndex = _props.rIndex;

	      if (onClick) {
	        onClick(rIndex + 1, e.currentTarget.cellIndex, e);
	      }
	    }
	  }, {
	    key: '__handleKeyDown__REACT_HOT_LOADER__',
	    value: function __handleKeyDown__REACT_HOT_LOADER__() {
	      return this.__handleKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleKeyDown__REACT_HOT_LOADER__',
	    value: function __handleKeyDown__REACT_HOT_LOADER__() {
	      return this.__handleKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleKeyDown__REACT_HOT_LOADER__',
	    value: function __handleKeyDown__REACT_HOT_LOADER__() {
	      return this.__handleKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleKeyDown__REACT_HOT_LOADER__',
	    value: function __handleKeyDown__REACT_HOT_LOADER__(e) {
	      if (this.props.keyBoardNav) {
	        this.props.onKeyDown(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          children = _props2.children,
	          columnTitle = _props2.columnTitle,
	          dataAlign = _props2.dataAlign,
	          hidden = _props2.hidden,
	          cellEdit = _props2.cellEdit,
	          attrs = _props2.attrs,
	          style = _props2.style,
	          isFocus = _props2.isFocus,
	          keyBoardNav = _props2.keyBoardNav,
	          tabIndex = _props2.tabIndex,
	          customNavStyle = _props2.customNavStyle,
	          row = _props2.row,
	          dragHandle = _props2.dragHandle,
	          connectDragSource = _props2.connectDragSource;
	      var className = this.props.className;


	      var tdStyle = _extends({
	        textAlign: dataAlign,
	        display: hidden ? 'none' : null
	      }, style);

	      var opts = {};

	      if (cellEdit) {
	        if (cellEdit.mode === _Const2.default.CELL_EDIT_CLICK) {
	          opts.onClick = this.handleCellEdit;
	        } else if (cellEdit.mode === _Const2.default.CELL_EDIT_DBCLICK) {
	          opts.onDoubleClick = this.handleCellEdit;
	        } else {
	          opts.onClick = this.handleCellClick;
	        }
	      }

	      if (keyBoardNav && isFocus) {
	        opts.onKeyDown = this.handleKeyDown;
	      }

	      if (isFocus) {
	        if (customNavStyle) {
	          var cusmtStyle = typeof customNavStyle === 'function' ? customNavStyle(children, row) : customNavStyle;
	          tdStyle = _extends({}, tdStyle, cusmtStyle);
	        } else {
	          className = className + ' default-focus-cell';
	        }
	      }
	      var columnOutput = _react2.default.createElement(
	        'td',
	        _extends({ tabIndex: tabIndex, style: tdStyle,
	          title: columnTitle,
	          className: className
	        }, opts, attrs),
	        typeof children === 'boolean' ? children.toString() : children
	      );

	      if (dragHandle) {
	        columnOutput = connectDragSource(columnOutput);
	      }

	      return columnOutput;
	    }
	  }]);

	  return TableColumn;
	}(_react.Component)) || _class);

	TableColumn.propTypes = {
	  rIndex: _react.PropTypes.number,
	  dataAlign: _react.PropTypes.string,
	  hidden: _react.PropTypes.bool,
	  className: _react.PropTypes.string,
	  columnTitle: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  onClick: _react.PropTypes.func,
	  attrs: _react.PropTypes.object,
	  style: _react.PropTypes.object,
	  isFocus: _react.PropTypes.bool,
	  onKeyDown: _react.PropTypes.func,
	  tabIndex: _react.PropTypes.string,
	  keyBoardNav: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  customNavStyle: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object]),
	  row: _react.PropTypes.any, /* only used on custom styling for navigation */
	  onDroppedRow: _react.PropTypes.func
	};

	TableColumn.defaultProps = {
	  dataAlign: 'left',
	  hidden: false,
	  className: '',
	  isFocus: false,
	  keyBoardNav: false
	};
	var _default = TableColumn;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(rowSource, 'rowSource', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableColumn.js');

	  __REACT_HOT_LOADER__.register(TableColumn, 'TableColumn', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableColumn.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableColumn.js');
	}();

	;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Editor = __webpack_require__(161);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableEditColumn = function (_Component) {
	  _inherits(TableEditColumn, _Component);

	  function TableEditColumn(props) {
	    _classCallCheck(this, TableEditColumn);

	    var _this = _possibleConstructorReturn(this, (TableEditColumn.__proto__ || Object.getPrototypeOf(TableEditColumn)).call(this, props));

	    _this.handleKeyPress = function () {
	      return _this.__handleKeyPress__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleBlur = function () {
	      return _this.__handleBlur__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleCustomUpdate = function () {
	      return _this.__handleCustomUpdate__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleClick = function () {
	      return _this.__handleClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.timeouteClear = 0;
	    var _this$props = _this.props,
	        fieldValue = _this$props.fieldValue,
	        row = _this$props.row,
	        className = _this$props.className;

	    _this.state = {
	      shakeEditor: false,
	      className: typeof className === 'function' ? className(fieldValue, row) : className
	    };
	    return _this;
	  }

	  _createClass(TableEditColumn, [{
	    key: '__handleKeyPress__REACT_HOT_LOADER__',
	    value: function __handleKeyPress__REACT_HOT_LOADER__() {
	      return this.__handleKeyPress__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleKeyPress__REACT_HOT_LOADER__',
	    value: function __handleKeyPress__REACT_HOT_LOADER__(e) {
	      if (e.keyCode === 13) {
	        // Pressed ENTER
	        var value = e.currentTarget.type === 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;

	        if (!this.validator(value)) {
	          return;
	        }
	        this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
	      } else if (e.keyCode === 27) {
	        this.props.completeEdit(null, this.props.rowIndex, this.props.colIndex);
	      } else if (e.keyCode === 9) {
	        this.props.onTab(this.props.rowIndex + 1, this.props.colIndex + 1, 'tab', e);
	        e.preventDefault();
	      } else if (e.type === 'click' && !this.props.blurToSave) {
	        // textarea click save button
	        var _value = e.target.parentElement.firstChild.value;
	        if (!this.validator(_value)) {
	          return;
	        }
	        this.props.completeEdit(_value, this.props.rowIndex, this.props.colIndex);
	      }
	    }
	  }, {
	    key: '__handleBlur__REACT_HOT_LOADER__',
	    value: function __handleBlur__REACT_HOT_LOADER__() {
	      return this.__handleBlur__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleBlur__REACT_HOT_LOADER__',
	    value: function __handleBlur__REACT_HOT_LOADER__(e) {
	      e.stopPropagation();
	      if (this.props.blurToSave) {
	        var value = e.currentTarget.type === 'checkbox' ? this._getCheckBoxValue(e) : e.currentTarget.value;
	        if (!this.validator(value)) {
	          return;
	        }
	        this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
	      }
	    }
	  }, {
	    key: '__handleCustomUpdate__REACT_HOT_LOADER__',
	    value: function __handleCustomUpdate__REACT_HOT_LOADER__() {
	      return this.__handleCustomUpdate__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCustomUpdate__REACT_HOT_LOADER__',
	    value: function __handleCustomUpdate__REACT_HOT_LOADER__(value) {
	      if (!this.validator(value)) {
	        return;
	      }
	      this.props.completeEdit(value, this.props.rowIndex, this.props.colIndex);
	    }
	  }, {
	    key: 'validator',
	    value: function validator(value) {
	      value;
	      return true;
	    }
	  }, {
	    key: 'clearTimeout',
	    value: function (_clearTimeout) {
	      function clearTimeout() {
	        return _clearTimeout.apply(this, arguments);
	      }

	      clearTimeout.toString = function () {
	        return _clearTimeout.toString();
	      };

	      return clearTimeout;
	    }(function () {
	      if (this.timeouteClear !== 0) {
	        clearTimeout(this.timeouteClear);
	        this.timeouteClear = 0;
	      }
	    })
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.refs.inputRef.focus();
	      var dom = _reactDom2.default.findDOMNode(this);
	      if (this.props.isFocus) {
	        dom.focus();
	      } else {
	        dom.blur();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var dom = _reactDom2.default.findDOMNode(this);
	      if (this.props.isFocus) {
	        dom.focus();
	      } else {
	        dom.blur();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearTimeout();
	    }
	  }, {
	    key: '__handleClick__REACT_HOT_LOADER__',
	    value: function __handleClick__REACT_HOT_LOADER__() {
	      return this.__handleClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleClick__REACT_HOT_LOADER__',
	    value: function __handleClick__REACT_HOT_LOADER__(e) {
	      if (e.target.tagName !== 'TD') {
	        e.stopPropagation();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          editable = _props.editable,
	          format = _props.format,
	          customEditor = _props.customEditor,
	          isFocus = _props.isFocus,
	          customStyleWithNav = _props.customStyleWithNav,
	          row = _props.row;
	      var shakeEditor = this.state.shakeEditor;

	      var attr = {
	        ref: 'inputRef',
	        onKeyDown: this.handleKeyPress,
	        onBlur: this.handleBlur
	      };
	      var style = { position: 'relative' };
	      var fieldValue = this.props.fieldValue;
	      var className = this.state.className;
	      // put placeholder if exist

	      editable.placeholder && (attr.placeholder = editable.placeholder);

	      var editorClass = (0, _classnames2.default)({ 'animated': shakeEditor, 'shake': shakeEditor });
	      var cellEditor = void 0;
	      if (customEditor) {
	        var customEditorProps = _extends({
	          row: row
	        }, attr, {
	          defaultValue: fieldValue || ''
	        }, customEditor.customEditorParameters);
	        cellEditor = customEditor.getElement(this.handleCustomUpdate, customEditorProps);
	      } else {
	        fieldValue = fieldValue === 0 ? '0' : fieldValue;
	        cellEditor = (0, _Editor2.default)(editable, attr, format, editorClass, fieldValue || '');
	      }

	      if (isFocus) {
	        if (customStyleWithNav) {
	          var customStyle = typeof customStyleWithNav === 'function' ? customStyleWithNav(fieldValue, row) : customStyleWithNav;
	          style = _extends({}, style, customStyle);
	        } else {
	          className = className + ' default-focus-cell';
	        }
	      }

	      return _react2.default.createElement(
	        'td',
	        { ref: 'td',
	          style: style,
	          className: className,
	          onClick: this.handleClick },
	        cellEditor
	      );
	    }
	  }, {
	    key: '_getCheckBoxValue',
	    value: function _getCheckBoxValue(e) {
	      var value = '';
	      var values = e.currentTarget.value.split(':');
	      value = e.currentTarget.checked ? values[0] : values[1];
	      return value;
	    }
	  }]);

	  return TableEditColumn;
	}(_react.Component);

	TableEditColumn.propTypes = {
	  completeEdit: _react.PropTypes.func,
	  rowIndex: _react.PropTypes.number,
	  colIndex: _react.PropTypes.number,
	  blurToSave: _react.PropTypes.bool,
	  editable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	  format: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
	  row: _react.PropTypes.any,
	  fieldValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool, _react.PropTypes.number, _react.PropTypes.array, _react.PropTypes.object]),
	  className: _react.PropTypes.any,
	  beforeShowError: _react.PropTypes.func,
	  isFocus: _react.PropTypes.bool,
	  customStyleWithNav: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.object])
	};

	var _default = TableEditColumn;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(TableEditColumn, 'TableEditColumn', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableEditColumn.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableEditColumn.js');
	}();

	;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var editor = function editor(editable, attr, format, editorClass, defaultValue, ignoreEditable) {
	  if (editable === true || editable === false && ignoreEditable || typeof editable === 'string') {
	    // simple declare
	    var type = editable ? 'text' : editable;
	    return _react2.default.createElement('input', _extends({}, attr, { type: type, defaultValue: defaultValue,
	      className: (editorClass || '') + ' form-control editor edit-text' }));
	  } else if (!editable) {
	    var _type = editable ? 'text' : editable;
	    return _react2.default.createElement('input', _extends({}, attr, { type: _type, defaultValue: defaultValue,
	      disabled: 'disabled',
	      className: (editorClass || '') + ' form-control editor edit-text' }));
	  } else if (editable && (editable.type === undefined || editable.type === null || editable.type.trim() === '')) {
	    var _type2 = editable ? 'text' : editable;
	    return _react2.default.createElement('input', _extends({}, attr, { type: _type2, defaultValue: defaultValue,
	      className: (editorClass || '') + ' form-control editor edit-text' }));
	  } else if (editable.type) {
	    // standard declare
	    // put style if exist
	    editable.style && (attr.style = editable.style);
	    // put class if exist
	    attr.className = (editorClass || '') + ' form-control editor edit-' + editable.type + (editable.className ? ' ' + editable.className : '');

	    if (editable.type === 'select') {
	      // process select input
	      var options = [];
	      var values = editable.options.values;
	      if (Array.isArray(values)) {
	        // only can use arrray data for options
	        var rowValue = void 0;
	        options = values.map(function (d, i) {
	          rowValue = format ? format(d) : d;
	          return _react2.default.createElement(
	            'option',
	            { key: 'option' + i, value: d },
	            rowValue
	          );
	        });
	      }
	      return _react2.default.createElement(
	        'select',
	        _extends({}, attr, { defaultValue: defaultValue }),
	        options
	      );
	    } else if (editable.type === 'textarea') {
	      // process textarea input
	      // put other if exist
	      editable.cols && (attr.cols = editable.cols);
	      editable.rows && (attr.rows = editable.rows);
	      var saveBtn = void 0;
	      var keyUpHandler = attr.onKeyDown;
	      if (keyUpHandler) {
	        attr.onKeyDown = function (e) {
	          if (e.keyCode !== 13) {
	            // not Pressed ENTER
	            keyUpHandler(e);
	          }
	        };
	        saveBtn = _react2.default.createElement(
	          'button',
	          {
	            className: 'btn btn-info btn-xs textarea-save-btn',
	            onClick: keyUpHandler },
	          'save'
	        );
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('textarea', _extends({}, attr, { defaultValue: defaultValue })),
	        saveBtn
	      );
	    } else if (editable.type === 'checkbox') {
	      var _values = 'true:false';
	      if (editable.options && editable.options.values) {
	        // values = editable.options.values.split(':');
	        _values = editable.options.values;
	      }
	      attr.className = attr.className.replace('form-control', '');
	      attr.className += ' checkbox pull-right';

	      var checked = defaultValue && defaultValue.toString() === _values.split(':')[0] ? true : false;

	      return _react2.default.createElement('input', _extends({}, attr, { type: 'checkbox',
	        value: _values, defaultChecked: checked }));
	    } else if (editable.type === 'datetime') {
	      return _react2.default.createElement('input', _extends({}, attr, { type: 'datetime-local', defaultValue: defaultValue }));
	    } else {
	      // process other input type. as password,url,email...
	      return _react2.default.createElement('input', _extends({}, attr, { type: 'text', defaultValue: defaultValue }));
	    }
	  }
	  // default return for other case of editable
	  return _react2.default.createElement('input', _extends({}, attr, { type: 'text',
	    className: (editorClass || '') + ' form-control editor edit-text' }));
	};

	var _default = editor;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(editor, 'editor', '/Users/garettarrowood/Power/react-bootstrap-table/src/Editor.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/Editor.js');
	}();

	;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: 0 */


	var ExpandComponent = function (_Component) {
	  _inherits(ExpandComponent, _Component);

	  function ExpandComponent() {
	    _classCallCheck(this, ExpandComponent);

	    return _possibleConstructorReturn(this, (ExpandComponent.__proto__ || Object.getPrototypeOf(ExpandComponent)).apply(this, arguments));
	  }

	  _createClass(ExpandComponent, [{
	    key: 'render',
	    value: function render() {
	      var trCss = {
	        style: {
	          backgroundColor: this.props.bgColor
	        },
	        className: (0, _classnames2.default)(this.props.isSelected ? this.props.selectRow.className : null, this.props.className)
	      };
	      return _react2.default.createElement(
	        'tr',
	        _extends({ hidden: this.props.hidden, width: this.props.width }, trCss),
	        _react2.default.createElement(
	          'td',
	          { colSpan: this.props.colSpan },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return ExpandComponent;
	}(_react.Component);

	var _default = ExpandComponent;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ExpandComponent, 'ExpandComponent', '/Users/garettarrowood/Power/react-bootstrap-table/src/ExpandComponent.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/ExpandComponent.js');
	}();

	;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getEmptyImage = exports.NativeTypes = undefined;
	exports.default = createHTML5Backend;

	var _HTML5Backend = __webpack_require__(164);

	var _HTML5Backend2 = _interopRequireDefault(_HTML5Backend);

	var _getEmptyImage = __webpack_require__(194);

	var _getEmptyImage2 = _interopRequireDefault(_getEmptyImage);

	var _NativeTypes = __webpack_require__(193);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.NativeTypes = NativeTypes;
	exports.getEmptyImage = _getEmptyImage2.default;
	function createHTML5Backend(manager) {
	  return new _HTML5Backend2.default(manager);
	}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _defaults = __webpack_require__(165);

	var _defaults2 = _interopRequireDefault(_defaults);

	var _shallowEqual = __webpack_require__(185);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _EnterLeaveCounter = __webpack_require__(186);

	var _EnterLeaveCounter2 = _interopRequireDefault(_EnterLeaveCounter);

	var _BrowserDetector = __webpack_require__(188);

	var _OffsetUtils = __webpack_require__(190);

	var _NativeDragSources = __webpack_require__(192);

	var _NativeTypes = __webpack_require__(193);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HTML5Backend = function () {
	  function HTML5Backend(manager) {
	    _classCallCheck(this, HTML5Backend);

	    this.actions = manager.getActions();
	    this.monitor = manager.getMonitor();
	    this.registry = manager.getRegistry();
	    this.context = manager.getContext();

	    this.sourcePreviewNodes = {};
	    this.sourcePreviewNodeOptions = {};
	    this.sourceNodes = {};
	    this.sourceNodeOptions = {};
	    this.enterLeaveCounter = new _EnterLeaveCounter2.default();

	    this.dragStartSourceIds = [];
	    this.dropTargetIds = [];
	    this.dragEnterTargetIds = [];
	    this.currentNativeSource = null;
	    this.currentNativeHandle = null;
	    this.currentDragSourceNode = null;
	    this.currentDragSourceNodeOffset = null;
	    this.currentDragSourceNodeOffsetChanged = false;
	    this.altKeyPressed = false;

	    this.getSourceClientOffset = this.getSourceClientOffset.bind(this);
	    this.handleTopDragStart = this.handleTopDragStart.bind(this);
	    this.handleTopDragStartCapture = this.handleTopDragStartCapture.bind(this);
	    this.handleTopDragEndCapture = this.handleTopDragEndCapture.bind(this);
	    this.handleTopDragEnter = this.handleTopDragEnter.bind(this);
	    this.handleTopDragEnterCapture = this.handleTopDragEnterCapture.bind(this);
	    this.handleTopDragLeaveCapture = this.handleTopDragLeaveCapture.bind(this);
	    this.handleTopDragOver = this.handleTopDragOver.bind(this);
	    this.handleTopDragOverCapture = this.handleTopDragOverCapture.bind(this);
	    this.handleTopDrop = this.handleTopDrop.bind(this);
	    this.handleTopDropCapture = this.handleTopDropCapture.bind(this);
	    this.handleSelectStart = this.handleSelectStart.bind(this);
	    this.endDragIfSourceWasRemovedFromDOM = this.endDragIfSourceWasRemovedFromDOM.bind(this);
	    this.endDragNativeItem = this.endDragNativeItem.bind(this);
	    this.asyncEndDragNativeItem = this.asyncEndDragNativeItem.bind(this);
	  }

	  _createClass(HTML5Backend, [{
	    key: 'setup',
	    value: function setup() {
	      if (this.window === undefined) {
	        return;
	      }

	      if (this.window.__isReactDndBackendSetUp) {
	        // eslint-disable-line no-underscore-dangle
	        throw new Error('Cannot have two HTML5 backends at the same time.');
	      }
	      this.window.__isReactDndBackendSetUp = true; // eslint-disable-line no-underscore-dangle
	      this.addEventListeners(this.window);
	    }
	  }, {
	    key: 'teardown',
	    value: function teardown() {
	      if (this.window === undefined) {
	        return;
	      }

	      this.window.__isReactDndBackendSetUp = false; // eslint-disable-line no-underscore-dangle
	      this.removeEventListeners(this.window);
	      this.clearCurrentDragSourceNode();
	      if (this.asyncEndDragFrameId) {
	        this.window.cancelAnimationFrame(this.asyncEndDragFrameId);
	      }
	    }
	  }, {
	    key: 'addEventListeners',
	    value: function addEventListeners(target) {
	      target.addEventListener('dragstart', this.handleTopDragStart);
	      target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
	      target.addEventListener('dragend', this.handleTopDragEndCapture, true);
	      target.addEventListener('dragenter', this.handleTopDragEnter);
	      target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
	      target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	      target.addEventListener('dragover', this.handleTopDragOver);
	      target.addEventListener('dragover', this.handleTopDragOverCapture, true);
	      target.addEventListener('drop', this.handleTopDrop);
	      target.addEventListener('drop', this.handleTopDropCapture, true);
	    }
	  }, {
	    key: 'removeEventListeners',
	    value: function removeEventListeners(target) {
	      target.removeEventListener('dragstart', this.handleTopDragStart);
	      target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
	      target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
	      target.removeEventListener('dragenter', this.handleTopDragEnter);
	      target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
	      target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
	      target.removeEventListener('dragover', this.handleTopDragOver);
	      target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
	      target.removeEventListener('drop', this.handleTopDrop);
	      target.removeEventListener('drop', this.handleTopDropCapture, true);
	    }
	  }, {
	    key: 'connectDragPreview',
	    value: function connectDragPreview(sourceId, node, options) {
	      var _this = this;

	      this.sourcePreviewNodeOptions[sourceId] = options;
	      this.sourcePreviewNodes[sourceId] = node;

	      return function () {
	        delete _this.sourcePreviewNodes[sourceId];
	        delete _this.sourcePreviewNodeOptions[sourceId];
	      };
	    }
	  }, {
	    key: 'connectDragSource',
	    value: function connectDragSource(sourceId, node, options) {
	      var _this2 = this;

	      this.sourceNodes[sourceId] = node;
	      this.sourceNodeOptions[sourceId] = options;

	      var handleDragStart = function handleDragStart(e) {
	        return _this2.handleDragStart(e, sourceId);
	      };
	      var handleSelectStart = function handleSelectStart(e) {
	        return _this2.handleSelectStart(e, sourceId);
	      };

	      node.setAttribute('draggable', true);
	      node.addEventListener('dragstart', handleDragStart);
	      node.addEventListener('selectstart', handleSelectStart);

	      return function () {
	        delete _this2.sourceNodes[sourceId];
	        delete _this2.sourceNodeOptions[sourceId];

	        node.removeEventListener('dragstart', handleDragStart);
	        node.removeEventListener('selectstart', handleSelectStart);
	        node.setAttribute('draggable', false);
	      };
	    }
	  }, {
	    key: 'connectDropTarget',
	    value: function connectDropTarget(targetId, node) {
	      var _this3 = this;

	      var handleDragEnter = function handleDragEnter(e) {
	        return _this3.handleDragEnter(e, targetId);
	      };
	      var handleDragOver = function handleDragOver(e) {
	        return _this3.handleDragOver(e, targetId);
	      };
	      var handleDrop = function handleDrop(e) {
	        return _this3.handleDrop(e, targetId);
	      };

	      node.addEventListener('dragenter', handleDragEnter);
	      node.addEventListener('dragover', handleDragOver);
	      node.addEventListener('drop', handleDrop);

	      return function () {
	        node.removeEventListener('dragenter', handleDragEnter);
	        node.removeEventListener('dragover', handleDragOver);
	        node.removeEventListener('drop', handleDrop);
	      };
	    }
	  }, {
	    key: 'getCurrentSourceNodeOptions',
	    value: function getCurrentSourceNodeOptions() {
	      var sourceId = this.monitor.getSourceId();
	      var sourceNodeOptions = this.sourceNodeOptions[sourceId];

	      return (0, _defaults2.default)(sourceNodeOptions || {}, {
	        dropEffect: this.altKeyPressed ? 'copy' : 'move'
	      });
	    }
	  }, {
	    key: 'getCurrentDropEffect',
	    value: function getCurrentDropEffect() {
	      if (this.isDraggingNativeItem()) {
	        // It makes more sense to default to 'copy' for native resources
	        return 'copy';
	      }

	      return this.getCurrentSourceNodeOptions().dropEffect;
	    }
	  }, {
	    key: 'getCurrentSourcePreviewNodeOptions',
	    value: function getCurrentSourcePreviewNodeOptions() {
	      var sourceId = this.monitor.getSourceId();
	      var sourcePreviewNodeOptions = this.sourcePreviewNodeOptions[sourceId];

	      return (0, _defaults2.default)(sourcePreviewNodeOptions || {}, {
	        anchorX: 0.5,
	        anchorY: 0.5,
	        captureDraggingState: false
	      });
	    }
	  }, {
	    key: 'getSourceClientOffset',
	    value: function getSourceClientOffset(sourceId) {
	      return (0, _OffsetUtils.getNodeClientOffset)(this.sourceNodes[sourceId]);
	    }
	  }, {
	    key: 'isDraggingNativeItem',
	    value: function isDraggingNativeItem() {
	      var itemType = this.monitor.getItemType();
	      return Object.keys(NativeTypes).some(function (key) {
	        return NativeTypes[key] === itemType;
	      });
	    }
	  }, {
	    key: 'beginDragNativeItem',
	    value: function beginDragNativeItem(type) {
	      this.clearCurrentDragSourceNode();

	      var SourceType = (0, _NativeDragSources.createNativeDragSource)(type);
	      this.currentNativeSource = new SourceType();
	      this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
	      this.actions.beginDrag([this.currentNativeHandle]);

	      // On Firefox, if mouseover fires, the drag is over but browser failed to tell us.
	      // See https://bugzilla.mozilla.org/show_bug.cgi?id=656164
	      // This is not true for other browsers.
	      if ((0, _BrowserDetector.isFirefox)()) {
	        this.window.addEventListener('mouseover', this.asyncEndDragNativeItem, true);
	      }
	    }
	  }, {
	    key: 'asyncEndDragNativeItem',
	    value: function asyncEndDragNativeItem() {
	      this.asyncEndDragFrameId = this.window.requestAnimationFrame(this.endDragNativeItem);
	      if ((0, _BrowserDetector.isFirefox)()) {
	        this.window.removeEventListener('mouseover', this.asyncEndDragNativeItem, true);
	        this.enterLeaveCounter.reset();
	      }
	    }
	  }, {
	    key: 'endDragNativeItem',
	    value: function endDragNativeItem() {
	      if (!this.isDraggingNativeItem()) {
	        return;
	      }

	      this.actions.endDrag();
	      this.registry.removeSource(this.currentNativeHandle);
	      this.currentNativeHandle = null;
	      this.currentNativeSource = null;
	    }
	  }, {
	    key: 'endDragIfSourceWasRemovedFromDOM',
	    value: function endDragIfSourceWasRemovedFromDOM() {
	      var node = this.currentDragSourceNode;
	      if (document.body.contains(node)) {
	        return;
	      }

	      if (this.clearCurrentDragSourceNode()) {
	        this.actions.endDrag();
	      }
	    }
	  }, {
	    key: 'setCurrentDragSourceNode',
	    value: function setCurrentDragSourceNode(node) {
	      this.clearCurrentDragSourceNode();
	      this.currentDragSourceNode = node;
	      this.currentDragSourceNodeOffset = (0, _OffsetUtils.getNodeClientOffset)(node);
	      this.currentDragSourceNodeOffsetChanged = false;

	      // Receiving a mouse event in the middle of a dragging operation
	      // means it has ended and the drag source node disappeared from DOM,
	      // so the browser didn't dispatch the dragend event.
	      this.window.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	    }
	  }, {
	    key: 'clearCurrentDragSourceNode',
	    value: function clearCurrentDragSourceNode() {
	      if (this.currentDragSourceNode) {
	        this.currentDragSourceNode = null;
	        this.currentDragSourceNodeOffset = null;
	        this.currentDragSourceNodeOffsetChanged = false;
	        this.window.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
	        return true;
	      }

	      return false;
	    }
	  }, {
	    key: 'checkIfCurrentDragSourceRectChanged',
	    value: function checkIfCurrentDragSourceRectChanged() {
	      var node = this.currentDragSourceNode;
	      if (!node) {
	        return false;
	      }

	      if (this.currentDragSourceNodeOffsetChanged) {
	        return true;
	      }

	      this.currentDragSourceNodeOffsetChanged = !(0, _shallowEqual2.default)((0, _OffsetUtils.getNodeClientOffset)(node), this.currentDragSourceNodeOffset);

	      return this.currentDragSourceNodeOffsetChanged;
	    }
	  }, {
	    key: 'handleTopDragStartCapture',
	    value: function handleTopDragStartCapture() {
	      this.clearCurrentDragSourceNode();
	      this.dragStartSourceIds = [];
	    }
	  }, {
	    key: 'handleDragStart',
	    value: function handleDragStart(e, sourceId) {
	      this.dragStartSourceIds.unshift(sourceId);
	    }
	  }, {
	    key: 'handleTopDragStart',
	    value: function handleTopDragStart(e) {
	      var _this4 = this;

	      var dragStartSourceIds = this.dragStartSourceIds;

	      this.dragStartSourceIds = null;

	      var clientOffset = (0, _OffsetUtils.getEventClientOffset)(e);

	      // Don't publish the source just yet (see why below)
	      this.actions.beginDrag(dragStartSourceIds, {
	        publishSource: false,
	        getSourceClientOffset: this.getSourceClientOffset,
	        clientOffset: clientOffset
	      });

	      var dataTransfer = e.dataTransfer;

	      var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

	      if (this.monitor.isDragging()) {
	        if (typeof dataTransfer.setDragImage === 'function') {
	          // Use custom drag image if user specifies it.
	          // If child drag source refuses drag but parent agrees,
	          // use parent's node as drag image. Neither works in IE though.
	          var sourceId = this.monitor.getSourceId();
	          var sourceNode = this.sourceNodes[sourceId];
	          var dragPreview = this.sourcePreviewNodes[sourceId] || sourceNode;

	          var _getCurrentSourcePrev = this.getCurrentSourcePreviewNodeOptions(),
	              anchorX = _getCurrentSourcePrev.anchorX,
	              anchorY = _getCurrentSourcePrev.anchorY;

	          var anchorPoint = { anchorX: anchorX, anchorY: anchorY };
	          var dragPreviewOffset = (0, _OffsetUtils.getDragPreviewOffset)(sourceNode, dragPreview, clientOffset, anchorPoint);
	          dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
	        }

	        try {
	          // Firefox won't drag without setting data
	          dataTransfer.setData('application/json', {});
	        } catch (err) {}
	        // IE doesn't support MIME types in setData


	        // Store drag source node so we can check whether
	        // it is removed from DOM and trigger endDrag manually.
	        this.setCurrentDragSourceNode(e.target);

	        // Now we are ready to publish the drag source.. or are we not?

	        var _getCurrentSourcePrev2 = this.getCurrentSourcePreviewNodeOptions(),
	            captureDraggingState = _getCurrentSourcePrev2.captureDraggingState;

	        if (!captureDraggingState) {
	          // Usually we want to publish it in the next tick so that browser
	          // is able to screenshot the current (not yet dragging) state.
	          //
	          // It also neatly avoids a situation where render() returns null
	          // in the same tick for the source element, and browser freaks out.
	          setTimeout(function () {
	            return _this4.actions.publishDragSource();
	          });
	        } else {
	          // In some cases the user may want to override this behavior, e.g.
	          // to work around IE not supporting custom drag previews.
	          //
	          // When using a custom drag layer, the only way to prevent
	          // the default drag preview from drawing in IE is to screenshot
	          // the dragging state in which the node itself has zero opacity
	          // and height. In this case, though, returning null from render()
	          // will abruptly end the dragging, which is not obvious.
	          //
	          // This is the reason such behavior is strictly opt-in.
	          this.actions.publishDragSource();
	        }
	      } else if (nativeType) {
	        // A native item (such as URL) dragged from inside the document
	        this.beginDragNativeItem(nativeType);
	      } else if (!dataTransfer.types && (!e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
	        // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
	        // Just let it drag. It's a native type (URL or text) and will be picked up in
	        // dragenter handler.
	        return; // eslint-disable-line no-useless-return
	      } else {
	        // If by this time no drag source reacted, tell browser not to drag.
	        e.preventDefault();
	      }
	    }
	  }, {
	    key: 'handleTopDragEndCapture',
	    value: function handleTopDragEndCapture() {
	      if (this.clearCurrentDragSourceNode()) {
	        // Firefox can dispatch this event in an infinite loop
	        // if dragend handler does something like showing an alert.
	        // Only proceed if we have not handled it already.
	        this.actions.endDrag();
	      }
	    }
	  }, {
	    key: 'handleTopDragEnterCapture',
	    value: function handleTopDragEnterCapture(e) {
	      this.dragEnterTargetIds = [];

	      var isFirstEnter = this.enterLeaveCounter.enter(e.target);
	      if (!isFirstEnter || this.monitor.isDragging()) {
	        return;
	      }

	      var dataTransfer = e.dataTransfer;

	      var nativeType = (0, _NativeDragSources.matchNativeItemType)(dataTransfer);

	      if (nativeType) {
	        // A native item (such as file or URL) dragged from outside the document
	        this.beginDragNativeItem(nativeType);
	      }
	    }
	  }, {
	    key: 'handleDragEnter',
	    value: function handleDragEnter(e, targetId) {
	      this.dragEnterTargetIds.unshift(targetId);
	    }
	  }, {
	    key: 'handleTopDragEnter',
	    value: function handleTopDragEnter(e) {
	      var _this5 = this;

	      var dragEnterTargetIds = this.dragEnterTargetIds;

	      this.dragEnterTargetIds = [];

	      if (!this.monitor.isDragging()) {
	        // This is probably a native item type we don't understand.
	        return;
	      }

	      this.altKeyPressed = e.altKey;

	      if (!(0, _BrowserDetector.isFirefox)()) {
	        // Don't emit hover in `dragenter` on Firefox due to an edge case.
	        // If the target changes position as the result of `dragenter`, Firefox
	        // will still happily dispatch `dragover` despite target being no longer
	        // there. The easy solution is to only fire `hover` in `dragover` on FF.
	        this.actions.hover(dragEnterTargetIds, {
	          clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
	        });
	      }

	      var canDrop = dragEnterTargetIds.some(function (targetId) {
	        return _this5.monitor.canDropOnTarget(targetId);
	      });

	      if (canDrop) {
	        // IE requires this to fire dragover events
	        e.preventDefault();
	        e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	      }
	    }
	  }, {
	    key: 'handleTopDragOverCapture',
	    value: function handleTopDragOverCapture() {
	      this.dragOverTargetIds = [];
	    }
	  }, {
	    key: 'handleDragOver',
	    value: function handleDragOver(e, targetId) {
	      this.dragOverTargetIds.unshift(targetId);
	    }
	  }, {
	    key: 'handleTopDragOver',
	    value: function handleTopDragOver(e) {
	      var _this6 = this;

	      var dragOverTargetIds = this.dragOverTargetIds;

	      this.dragOverTargetIds = [];

	      if (!this.monitor.isDragging()) {
	        // This is probably a native item type we don't understand.
	        // Prevent default "drop and blow away the whole document" action.
	        e.preventDefault();
	        e.dataTransfer.dropEffect = 'none';
	        return;
	      }

	      this.altKeyPressed = e.altKey;

	      this.actions.hover(dragOverTargetIds, {
	        clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
	      });

	      var canDrop = dragOverTargetIds.some(function (targetId) {
	        return _this6.monitor.canDropOnTarget(targetId);
	      });

	      if (canDrop) {
	        // Show user-specified drop effect.
	        e.preventDefault();
	        e.dataTransfer.dropEffect = this.getCurrentDropEffect();
	      } else if (this.isDraggingNativeItem()) {
	        // Don't show a nice cursor but still prevent default
	        // "drop and blow away the whole document" action.
	        e.preventDefault();
	        e.dataTransfer.dropEffect = 'none';
	      } else if (this.checkIfCurrentDragSourceRectChanged()) {
	        // Prevent animating to incorrect position.
	        // Drop effect must be other than 'none' to prevent animation.
	        e.preventDefault();
	        e.dataTransfer.dropEffect = 'move';
	      }
	    }
	  }, {
	    key: 'handleTopDragLeaveCapture',
	    value: function handleTopDragLeaveCapture(e) {
	      if (this.isDraggingNativeItem()) {
	        e.preventDefault();
	      }

	      var isLastLeave = this.enterLeaveCounter.leave(e.target);
	      if (!isLastLeave) {
	        return;
	      }

	      if (this.isDraggingNativeItem()) {
	        this.endDragNativeItem();
	      }
	    }
	  }, {
	    key: 'handleTopDropCapture',
	    value: function handleTopDropCapture(e) {
	      this.dropTargetIds = [];
	      e.preventDefault();

	      if (this.isDraggingNativeItem()) {
	        this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);
	      }

	      this.enterLeaveCounter.reset();
	    }
	  }, {
	    key: 'handleDrop',
	    value: function handleDrop(e, targetId) {
	      this.dropTargetIds.unshift(targetId);
	    }
	  }, {
	    key: 'handleTopDrop',
	    value: function handleTopDrop(e) {
	      var dropTargetIds = this.dropTargetIds;

	      this.dropTargetIds = [];

	      this.actions.hover(dropTargetIds, {
	        clientOffset: (0, _OffsetUtils.getEventClientOffset)(e)
	      });
	      this.actions.drop({ dropEffect: this.getCurrentDropEffect() });

	      if (this.isDraggingNativeItem()) {
	        this.endDragNativeItem();
	      } else {
	        this.endDragIfSourceWasRemovedFromDOM();
	      }
	    }
	  }, {
	    key: 'handleSelectStart',
	    value: function handleSelectStart(e) {
	      var target = e.target;

	      // Only IE requires us to explicitly say
	      // we want drag drop operation to start

	      if (typeof target.dragDrop !== 'function') {
	        return;
	      }

	      // Inputs and textareas should be selectable
	      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
	        return;
	      }

	      // For other targets, ask IE
	      // to enable drag and drop
	      e.preventDefault();
	      target.dragDrop();
	    }
	  }, {
	    key: 'window',
	    get: function get() {
	      if (this.context && this.context.window) {
	        return this.context.window;
	      } else if (typeof window !== 'undefined') {
	        return window;
	      }
	      return undefined;
	    }
	  }]);

	  return HTML5Backend;
	}();

	exports.default = HTML5Backend;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(95),
	    assignInWith = __webpack_require__(166),
	    baseRest = __webpack_require__(92),
	    customDefaultsAssignIn = __webpack_require__(184);

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var defaults = baseRest(function(args) {
	  args.push(undefined, customDefaultsAssignIn);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(167),
	    createAssigner = __webpack_require__(170),
	    keysIn = __webpack_require__(173);

	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});

	module.exports = assignInWith;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(168),
	    baseAssignValue = __webpack_require__(169);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(169),
	    eq = __webpack_require__(70);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(99);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(92),
	    isIterateeCall = __webpack_require__(171);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(70),
	    isArrayLike = __webpack_require__(102),
	    isIndex = __webpack_require__(172),
	    isObject = __webpack_require__(44);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ }),
/* 172 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(174),
	    baseKeysIn = __webpack_require__(181),
	    isArrayLike = __webpack_require__(102);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(175),
	    isArguments = __webpack_require__(113),
	    isArray = __webpack_require__(43),
	    isBuffer = __webpack_require__(176),
	    isIndex = __webpack_require__(172),
	    isTypedArray = __webpack_require__(178);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 175 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(28),
	    stubFalse = __webpack_require__(177);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(179),
	    baseUnary = __webpack_require__(90),
	    nodeUtil = __webpack_require__(180);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(26),
	    isLength = __webpack_require__(103),
	    isObjectLike = __webpack_require__(34);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(29);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)(module)))

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44),
	    isPrototype = __webpack_require__(182),
	    nativeKeysIn = __webpack_require__(183);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 183 */
/***/ (function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(70);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	 * of source objects to the destination object for all destination properties
	 * that resolve to `undefined`.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function customDefaultsAssignIn(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = customDefaultsAssignIn;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i += 1) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }

	    var valA = objA[keysA[i]];
	    var valB = objB[keysA[i]];

	    if (valA !== valB) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _union = __webpack_require__(187);

	var _union2 = _interopRequireDefault(_union);

	var _without = __webpack_require__(47);

	var _without2 = _interopRequireDefault(_without);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EnterLeaveCounter = function () {
	  function EnterLeaveCounter() {
	    _classCallCheck(this, EnterLeaveCounter);

	    this.entered = [];
	  }

	  _createClass(EnterLeaveCounter, [{
	    key: 'enter',
	    value: function enter(enteringNode) {
	      var previousLength = this.entered.length;

	      var isNodeEntered = function isNodeEntered(node) {
	        return document.documentElement.contains(node) && (!node.contains || node.contains(enteringNode));
	      };

	      this.entered = (0, _union2.default)(this.entered.filter(isNodeEntered), [enteringNode]);

	      return previousLength === 0 && this.entered.length > 0;
	    }
	  }, {
	    key: 'leave',
	    value: function leave(leavingNode) {
	      var previousLength = this.entered.length;

	      this.entered = (0, _without2.default)(this.entered.filter(function (node) {
	        return document.documentElement.contains(node);
	      }), leavingNode);

	      return previousLength > 0 && this.entered.length === 0;
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.entered = [];
	    }
	  }]);

	  return EnterLeaveCounter;
	}();

	exports.default = EnterLeaveCounter;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(110),
	    baseRest = __webpack_require__(92),
	    baseUniq = __webpack_require__(115),
	    isArrayLikeObject = __webpack_require__(101);

	/**
	 * Creates an array of unique values, in order, from all given arrays using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.union([2], [1, 2]);
	 * // => [2, 1]
	 */
	var union = baseRest(function(arrays) {
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	});

	module.exports = union;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isSafari = exports.isFirefox = undefined;

	var _memoize = __webpack_require__(189);

	var _memoize2 = _interopRequireDefault(_memoize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isFirefox = exports.isFirefox = (0, _memoize2.default)(function () {
	  return (/firefox/i.test(navigator.userAgent)
	  );
	});
	var isSafari = exports.isSafari = (0, _memoize2.default)(function () {
	  return Boolean(window.safari);
	});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(50);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getNodeClientOffset = getNodeClientOffset;
	exports.getEventClientOffset = getEventClientOffset;
	exports.getDragPreviewOffset = getDragPreviewOffset;

	var _BrowserDetector = __webpack_require__(188);

	var _MonotonicInterpolant = __webpack_require__(191);

	var _MonotonicInterpolant2 = _interopRequireDefault(_MonotonicInterpolant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint
	   no-mixed-operators: off
	*/
	var ELEMENT_NODE = 1;

	function getNodeClientOffset(node) {
	  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

	  if (!el) {
	    return null;
	  }

	  var _el$getBoundingClient = el.getBoundingClientRect(),
	      top = _el$getBoundingClient.top,
	      left = _el$getBoundingClient.left;

	  return { x: left, y: top };
	}

	function getEventClientOffset(e) {
	  return {
	    x: e.clientX,
	    y: e.clientY
	  };
	}

	function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint) {
	  // The browsers will use the image intrinsic size under different conditions.
	  // Firefox only cares if it's an image, but WebKit also wants it to be detached.
	  var isImage = dragPreview.nodeName === 'IMG' && ((0, _BrowserDetector.isFirefox)() || !document.documentElement.contains(dragPreview));
	  var dragPreviewNode = isImage ? sourceNode : dragPreview;

	  var dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
	  var offsetFromDragPreview = {
	    x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
	    y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
	  };

	  var sourceWidth = sourceNode.offsetWidth,
	      sourceHeight = sourceNode.offsetHeight;
	  var anchorX = anchorPoint.anchorX,
	      anchorY = anchorPoint.anchorY;


	  var dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
	  var dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;

	  // Work around @2x coordinate discrepancies in browsers
	  if ((0, _BrowserDetector.isSafari)() && isImage) {
	    dragPreviewHeight /= window.devicePixelRatio;
	    dragPreviewWidth /= window.devicePixelRatio;
	  }

	  // Interpolate coordinates depending on anchor point
	  // If you know a simpler way to do this, let me know
	  var interpolantX = new _MonotonicInterpolant2.default([0, 0.5, 1], [
	  // Dock to the left
	  offsetFromDragPreview.x,
	  // Align at the center
	  offsetFromDragPreview.x / sourceWidth * dragPreviewWidth,
	  // Dock to the right
	  offsetFromDragPreview.x + dragPreviewWidth - sourceWidth]);
	  var interpolantY = new _MonotonicInterpolant2.default([0, 0.5, 1], [
	  // Dock to the top
	  offsetFromDragPreview.y,
	  // Align at the center
	  offsetFromDragPreview.y / sourceHeight * dragPreviewHeight,
	  // Dock to the bottom
	  offsetFromDragPreview.y + dragPreviewHeight - sourceHeight]);
	  var x = interpolantX.interpolate(anchorX);
	  var y = interpolantY.interpolate(anchorY);

	  // Work around Safari 8 positioning bug
	  if ((0, _BrowserDetector.isSafari)() && isImage) {
	    // We'll have to wait for @3x to see if this is entirely correct
	    y += (window.devicePixelRatio - 1) * dragPreviewHeight;
	  }

	  return { x: x, y: y };
	}

/***/ }),
/* 191 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* eslint
	   no-plusplus: off,
	   no-mixed-operators: off
	*/
	var MonotonicInterpolant = function () {
	  function MonotonicInterpolant(xs, ys) {
	    _classCallCheck(this, MonotonicInterpolant);

	    var length = xs.length;

	    // Rearrange xs and ys so that xs is sorted
	    var indexes = [];
	    for (var i = 0; i < length; i++) {
	      indexes.push(i);
	    }
	    indexes.sort(function (a, b) {
	      return xs[a] < xs[b] ? -1 : 1;
	    });

	    // Get consecutive differences and slopes
	    var dys = [];
	    var dxs = [];
	    var ms = [];
	    var dx = void 0;
	    var dy = void 0;
	    for (var _i = 0; _i < length - 1; _i++) {
	      dx = xs[_i + 1] - xs[_i];
	      dy = ys[_i + 1] - ys[_i];
	      dxs.push(dx);
	      dys.push(dy);
	      ms.push(dy / dx);
	    }

	    // Get degree-1 coefficients
	    var c1s = [ms[0]];
	    for (var _i2 = 0; _i2 < dxs.length - 1; _i2++) {
	      var _m = ms[_i2];
	      var mNext = ms[_i2 + 1];
	      if (_m * mNext <= 0) {
	        c1s.push(0);
	      } else {
	        dx = dxs[_i2];
	        var dxNext = dxs[_i2 + 1];
	        var common = dx + dxNext;
	        c1s.push(3 * common / ((common + dxNext) / _m + (common + dx) / mNext));
	      }
	    }
	    c1s.push(ms[ms.length - 1]);

	    // Get degree-2 and degree-3 coefficients
	    var c2s = [];
	    var c3s = [];
	    var m = void 0;
	    for (var _i3 = 0; _i3 < c1s.length - 1; _i3++) {
	      m = ms[_i3];
	      var c1 = c1s[_i3];
	      var invDx = 1 / dxs[_i3];
	      var _common = c1 + c1s[_i3 + 1] - m - m;
	      c2s.push((m - c1 - _common) * invDx);
	      c3s.push(_common * invDx * invDx);
	    }

	    this.xs = xs;
	    this.ys = ys;
	    this.c1s = c1s;
	    this.c2s = c2s;
	    this.c3s = c3s;
	  }

	  _createClass(MonotonicInterpolant, [{
	    key: "interpolate",
	    value: function interpolate(x) {
	      var xs = this.xs,
	          ys = this.ys,
	          c1s = this.c1s,
	          c2s = this.c2s,
	          c3s = this.c3s;

	      // The rightmost point in the dataset should give an exact result

	      var i = xs.length - 1;
	      if (x === xs[i]) {
	        return ys[i];
	      }

	      // Search for the interval x is in, returning the corresponding y if x is one of the original xs
	      var low = 0;
	      var high = c3s.length - 1;
	      var mid = void 0;
	      while (low <= high) {
	        mid = Math.floor(0.5 * (low + high));
	        var xHere = xs[mid];
	        if (xHere < x) {
	          low = mid + 1;
	        } else if (xHere > x) {
	          high = mid - 1;
	        } else {
	          return ys[mid];
	        }
	      }
	      i = Math.max(0, high);

	      // Interpolate
	      var diff = x - xs[i];
	      var diffSq = diff * diff;
	      return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
	    }
	  }]);

	  return MonotonicInterpolant;
	}();

	exports.default = MonotonicInterpolant;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _nativeTypesConfig;

	exports.createNativeDragSource = createNativeDragSource;
	exports.matchNativeItemType = matchNativeItemType;

	var _NativeTypes = __webpack_require__(193);

	var NativeTypes = _interopRequireWildcard(_NativeTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
	  var result = typesToTry.reduce(function (resultSoFar, typeToTry) {
	    return resultSoFar || dataTransfer.getData(typeToTry);
	  }, null);

	  return result != null ? // eslint-disable-line eqeqeq
	  result : defaultValue;
	}

	var nativeTypesConfig = (_nativeTypesConfig = {}, _defineProperty(_nativeTypesConfig, NativeTypes.FILE, {
	  exposeProperty: 'files',
	  matchesTypes: ['Files'],
	  getData: function getData(dataTransfer) {
	    return Array.prototype.slice.call(dataTransfer.files);
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.URL, {
	  exposeProperty: 'urls',
	  matchesTypes: ['Url', 'text/uri-list'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n');
	  }
	}), _defineProperty(_nativeTypesConfig, NativeTypes.TEXT, {
	  exposeProperty: 'text',
	  matchesTypes: ['Text', 'text/plain'],
	  getData: function getData(dataTransfer, matchesTypes) {
	    return getDataFromDataTransfer(dataTransfer, matchesTypes, '');
	  }
	}), _nativeTypesConfig);

	function createNativeDragSource(type) {
	  var _nativeTypesConfig$ty = nativeTypesConfig[type],
	      exposeProperty = _nativeTypesConfig$ty.exposeProperty,
	      matchesTypes = _nativeTypesConfig$ty.matchesTypes,
	      getData = _nativeTypesConfig$ty.getData;


	  return function () {
	    function NativeDragSource() {
	      var _item, _mutatorMap;

	      _classCallCheck(this, NativeDragSource);

	      this.item = (_item = {}, _mutatorMap = {}, _mutatorMap[exposeProperty] = _mutatorMap[exposeProperty] || {}, _mutatorMap[exposeProperty].get = function () {
	        console.warn( // eslint-disable-line no-console
	        'Browser doesn\'t allow reading "' + exposeProperty + '" until the drop event.');
	        return null;
	      }, _defineEnumerableProperties(_item, _mutatorMap), _item);
	    }

	    _createClass(NativeDragSource, [{
	      key: 'mutateItemByReadingDataTransfer',
	      value: function mutateItemByReadingDataTransfer(dataTransfer) {
	        delete this.item[exposeProperty];
	        this.item[exposeProperty] = getData(dataTransfer, matchesTypes);
	      }
	    }, {
	      key: 'canDrag',
	      value: function canDrag() {
	        return true;
	      }
	    }, {
	      key: 'beginDrag',
	      value: function beginDrag() {
	        return this.item;
	      }
	    }, {
	      key: 'isDragging',
	      value: function isDragging(monitor, handle) {
	        return handle === monitor.getSourceId();
	      }
	    }, {
	      key: 'endDrag',
	      value: function endDrag() {}
	    }]);

	    return NativeDragSource;
	  }();
	}

	function matchNativeItemType(dataTransfer) {
	  var dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);

	  return Object.keys(nativeTypesConfig).filter(function (nativeItemType) {
	    var matchesTypes = nativeTypesConfig[nativeItemType].matchesTypes;

	    return matchesTypes.some(function (t) {
	      return dataTransferTypes.indexOf(t) > -1;
	    });
	  })[0] || null;
	}

/***/ }),
/* 193 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FILE = exports.FILE = '__NATIVE_FILE__';
	var URL = exports.URL = '__NATIVE_URL__';
	var TEXT = exports.TEXT = '__NATIVE_TEXT__';

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getEmptyImage;
	var emptyImage = void 0;
	function getEmptyImage() {
	  if (!emptyImage) {
	    emptyImage = new Image();
	    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	  }

	  return emptyImage;
	}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _PageButton = __webpack_require__(196);

	var _PageButton2 = _interopRequireDefault(_PageButton);

	var _SizePerPageDropDown = __webpack_require__(197);

	var _SizePerPageDropDown2 = _interopRequireDefault(_SizePerPageDropDown);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PaginationList = function (_Component) {
	  _inherits(PaginationList, _Component);

	  function PaginationList(props) {
	    _classCallCheck(this, PaginationList);

	    var _this = _possibleConstructorReturn(this, (PaginationList.__proto__ || Object.getPrototypeOf(PaginationList)).call(this, props));

	    _this.changePage = function () {
	      return _this.__changePage__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.changeSizePerPage = function () {
	      return _this.__changeSizePerPage__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.toggleDropDown = function () {
	      return _this.__toggleDropDown__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.state = {
	      open: _this.props.open
	    };
	    return _this;
	  }

	  _createClass(PaginationList, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setState({ open: false });
	    }
	  }, {
	    key: '__changePage__REACT_HOT_LOADER__',
	    value: function __changePage__REACT_HOT_LOADER__() {
	      return this.__changePage__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__changePage__REACT_HOT_LOADER__',
	    value: function __changePage__REACT_HOT_LOADER__(page) {
	      var _props = this.props,
	          pageStartIndex = _props.pageStartIndex,
	          prePage = _props.prePage,
	          currPage = _props.currPage,
	          nextPage = _props.nextPage,
	          lastPage = _props.lastPage,
	          firstPage = _props.firstPage,
	          sizePerPage = _props.sizePerPage;


	      if (page === prePage) {
	        page = currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
	      } else if (page === nextPage) {
	        page = currPage + 1 > this.lastPage ? this.lastPage : currPage + 1;
	      } else if (page === lastPage) {
	        page = this.lastPage;
	      } else if (page === firstPage) {
	        page = pageStartIndex;
	      } else {
	        page = parseInt(page, 10);
	      }

	      if (page !== currPage) {
	        this.props.changePage(page, sizePerPage);
	      }
	    }
	  }, {
	    key: '__changeSizePerPage__REACT_HOT_LOADER__',
	    value: function __changeSizePerPage__REACT_HOT_LOADER__() {
	      return this.__changeSizePerPage__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__changeSizePerPage__REACT_HOT_LOADER__',
	    value: function __changeSizePerPage__REACT_HOT_LOADER__(pageNum) {
	      var selectSize = typeof pageNum === 'string' ? parseInt(pageNum, 10) : pageNum;
	      var currPage = this.props.currPage;

	      if (selectSize !== this.props.sizePerPage) {
	        this.totalPages = Math.ceil(this.props.dataSize / selectSize);
	        this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
	        if (currPage > this.lastPage) currPage = this.lastPage;
	        this.props.changePage(currPage, selectSize);
	        if (this.props.onSizePerPageList) {
	          this.props.onSizePerPageList(selectSize);
	        }
	      } else {
	        this.setState({ open: false });
	      }
	    }
	  }, {
	    key: '__toggleDropDown__REACT_HOT_LOADER__',
	    value: function __toggleDropDown__REACT_HOT_LOADER__() {
	      return this.__toggleDropDown__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__toggleDropDown__REACT_HOT_LOADER__',
	    value: function __toggleDropDown__REACT_HOT_LOADER__() {
	      this.setState({
	        open: !this.state.open
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          currPage = _props2.currPage,
	          dataSize = _props2.dataSize,
	          sizePerPage = _props2.sizePerPage,
	          sizePerPageList = _props2.sizePerPageList,
	          paginationShowsTotal = _props2.paginationShowsTotal,
	          pageStartIndex = _props2.pageStartIndex,
	          paginationPanel = _props2.paginationPanel,
	          hidePageListOnlyOnePage = _props2.hidePageListOnlyOnePage;

	      this.totalPages = Math.ceil(dataSize / sizePerPage);
	      this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
	      var pageBtns = this.makePage(typeof paginationPanel === 'function');
	      var dropdown = this.makeDropDown();

	      var offset = Math.abs(_Const2.default.PAGE_START_INDEX - pageStartIndex);
	      var start = (currPage - pageStartIndex) * sizePerPage;
	      start = dataSize === 0 ? 0 : start + 1;
	      var to = Math.min(sizePerPage * (currPage + offset) - 1, dataSize);
	      if (to >= dataSize) to--;
	      var total = paginationShowsTotal ? _react2.default.createElement(
	        'span',
	        null,
	        'Showing rows ',
	        start,
	        ' to\xA0',
	        to + 1,
	        ' of\xA0',
	        dataSize
	      ) : null;

	      if (typeof paginationShowsTotal === 'function') {
	        total = paginationShowsTotal(start, to + 1, dataSize);
	      }

	      var content = paginationPanel && paginationPanel({
	        currPage: currPage,
	        sizePerPage: sizePerPage,
	        sizePerPageList: sizePerPageList,
	        pageStartIndex: pageStartIndex,
	        changePage: this.changePage,
	        toggleDropDown: this.toggleDropDown,
	        changeSizePerPage: this.changeSizePerPage,
	        components: {
	          totalText: total,
	          sizePerPageDropdown: dropdown,
	          pageList: pageBtns
	        }
	      });

	      var hidePageList = hidePageListOnlyOnePage && this.totalPages === 1 ? 'none' : 'block';
	      return _react2.default.createElement(
	        'div',
	        { className: 'row', style: { marginTop: 15 } },
	        content || _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
	            total,
	            sizePerPageList.length > 1 ? dropdown : null
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { display: hidePageList },
	              className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
	            pageBtns
	          )
	        )
	      );
	    }
	  }, {
	    key: 'makeDropDown',
	    value: function makeDropDown() {
	      var _this2 = this;

	      var dropdown = void 0;
	      var dropdownProps = void 0;
	      var sizePerPageText = '';
	      var _props3 = this.props,
	          sizePerPageDropDown = _props3.sizePerPageDropDown,
	          hideSizePerPage = _props3.hideSizePerPage,
	          sizePerPage = _props3.sizePerPage,
	          sizePerPageList = _props3.sizePerPageList;

	      if (sizePerPageDropDown) {
	        dropdown = sizePerPageDropDown({
	          open: this.state.open,
	          hideSizePerPage: hideSizePerPage,
	          currSizePerPage: sizePerPage,
	          sizePerPageList: sizePerPageList,
	          toggleDropDown: this.toggleDropDown,
	          changeSizePerPage: this.changeSizePerPage
	        });
	        if (dropdown.type.name === _SizePerPageDropDown2.default.name) {
	          dropdownProps = dropdown.props;
	        } else {
	          return dropdown;
	        }
	      }

	      if (dropdownProps || !dropdown) {
	        var sizePerPageOptions = sizePerPageList.map(function (_sizePerPage) {
	          var pageText = _sizePerPage.text || _sizePerPage;
	          var pageNum = _sizePerPage.value || _sizePerPage;
	          if (sizePerPage === pageNum) sizePerPageText = pageText;
	          return _react2.default.createElement(
	            'li',
	            { key: pageText, role: 'presentation' },
	            _react2.default.createElement(
	              'a',
	              { role: 'menuitem',
	                tabIndex: '-1', href: '#',
	                'data-page': pageNum,
	                onClick: function onClick(e) {
	                  e.preventDefault();
	                  _this2.changeSizePerPage(pageNum);
	                } },
	              pageText
	            )
	          );
	        });
	        dropdown = _react2.default.createElement(_SizePerPageDropDown2.default, _extends({
	          open: this.state.open,
	          hidden: hideSizePerPage,
	          currSizePerPage: String(sizePerPageText),
	          options: sizePerPageOptions,
	          onClick: this.toggleDropDown
	        }, dropdownProps));
	      }
	      return dropdown;
	    }
	  }, {
	    key: 'makePage',
	    value: function makePage() {
	      var _this3 = this;

	      var isCustomPagingPanel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      var pages = this.getPages();
	      var isStart = function isStart(page, _ref) {
	        var currPage = _ref.currPage,
	            pageStartIndex = _ref.pageStartIndex,
	            firstPage = _ref.firstPage,
	            prePage = _ref.prePage;
	        return currPage === pageStartIndex && (page === firstPage || page === prePage);
	      };
	      var isEnd = function isEnd(page, _ref2) {
	        var currPage = _ref2.currPage,
	            nextPage = _ref2.nextPage,
	            lastPage = _ref2.lastPage;
	        return currPage === _this3.lastPage && (page === nextPage || page === lastPage);
	      };
	      var pageBtns = pages.filter(function (page) {
	        if (this.props.alwaysShowAllBtns) {
	          return true;
	        }
	        return isStart(page, this.props) || isEnd(page, this.props) ? false : true;
	      }, this).map(function (page) {
	        var isActive = page === this.props.currPage;
	        var isDisabled = isStart(page, this.props) || isEnd(page, this.props) ? true : false;
	        var title = page + '';

	        if (page === this.props.nextPage) {
	          title = this.props.nextPageTitle;
	        } else if (page === this.props.prePage) {
	          title = this.props.prePageTitle;
	        } else if (page === this.props.firstPage) {
	          title = this.props.firstPageTitle;
	        } else if (page === this.props.lastPage) {
	          title = this.props.lastPageTitle;
	        }

	        return _react2.default.createElement(
	          _PageButton2.default,
	          { key: page,
	            title: title,
	            changePage: this.changePage,
	            active: isActive,
	            disable: isDisabled },
	          page
	        );
	      }, this);
	      var classname = (0, _classnames2.default)(isCustomPagingPanel ? null : 'react-bootstrap-table-page-btns-ul', 'pagination');
	      return _react2.default.createElement(
	        'ul',
	        { className: classname },
	        pageBtns
	      );
	    }
	  }, {
	    key: 'getLastPage',
	    value: function getLastPage() {
	      return this.lastPage;
	    }
	  }, {
	    key: 'getPages',
	    value: function getPages() {
	      var pages = void 0;
	      var endPage = this.totalPages;
	      if (endPage <= 0) return [];
	      var startPage = Math.max(this.props.currPage - Math.floor(this.props.paginationSize / 2), this.props.pageStartIndex);
	      endPage = startPage + this.props.paginationSize - 1;

	      if (endPage > this.lastPage) {
	        endPage = this.lastPage;
	        startPage = endPage - this.props.paginationSize + 1;
	      }

	      if (startPage !== this.props.pageStartIndex && this.totalPages > this.props.paginationSize && this.props.withFirstAndLast) {
	        pages = [this.props.firstPage, this.props.prePage];
	      } else if (this.totalPages > 1 || this.props.alwaysShowAllBtns) {
	        pages = [this.props.prePage];
	      } else {
	        pages = [];
	      }

	      for (var i = startPage; i <= endPage; i++) {
	        if (i >= this.props.pageStartIndex) pages.push(i);
	      }

	      if (endPage <= this.lastPage) {
	        pages.push(this.props.nextPage);
	      }
	      if (endPage !== this.totalPages && this.props.withFirstAndLast) {
	        pages.push(this.props.lastPage);
	      }

	      return pages;
	    }
	  }]);

	  return PaginationList;
	}(_react.Component);

	PaginationList.propTypes = {
	  currPage: _react.PropTypes.number,
	  sizePerPage: _react.PropTypes.number,
	  dataSize: _react.PropTypes.number,
	  changePage: _react.PropTypes.func,
	  sizePerPageList: _react.PropTypes.array,
	  paginationShowsTotal: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.func]),
	  paginationSize: _react.PropTypes.number,
	  onSizePerPageList: _react.PropTypes.func,
	  prePage: _react.PropTypes.string,
	  pageStartIndex: _react.PropTypes.number,
	  hideSizePerPage: _react.PropTypes.bool,
	  alwaysShowAllBtns: _react.PropTypes.bool,
	  withFirstAndLast: _react.PropTypes.bool,
	  sizePerPageDropDown: _react.PropTypes.func,
	  paginationPanel: _react.PropTypes.func,
	  prePageTitle: _react.PropTypes.string,
	  nextPageTitle: _react.PropTypes.string,
	  firstPageTitle: _react.PropTypes.string,
	  lastPageTitle: _react.PropTypes.string,
	  hidePageListOnlyOnePage: _react.PropTypes.bool
	};

	PaginationList.defaultProps = {
	  sizePerPage: _Const2.default.SIZE_PER_PAGE,
	  pageStartIndex: _Const2.default.PAGE_START_INDEX
	};

	var _default = PaginationList;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(PaginationList, 'PaginationList', '/Users/garettarrowood/Power/react-bootstrap-table/src/pagination/PaginationList.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/pagination/PaginationList.js');
	}();

	;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PageButton = function (_Component) {
	  _inherits(PageButton, _Component);

	  function PageButton(props) {
	    _classCallCheck(this, PageButton);

	    var _this = _possibleConstructorReturn(this, (PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call(this, props));

	    _this.pageBtnClick = function () {
	      return _this.__pageBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    return _this;
	  }

	  _createClass(PageButton, [{
	    key: '__pageBtnClick__REACT_HOT_LOADER__',
	    value: function __pageBtnClick__REACT_HOT_LOADER__() {
	      return this.__pageBtnClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__pageBtnClick__REACT_HOT_LOADER__',
	    value: function __pageBtnClick__REACT_HOT_LOADER__(e) {
	      e.preventDefault();
	      this.props.changePage(e.currentTarget.textContent);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2.default)({
	        'active': this.props.active,
	        'disabled': this.props.disable,
	        'hidden': this.props.hidden,
	        'page-item': true
	      });
	      return _react2.default.createElement(
	        'li',
	        { className: classes, title: this.props.title },
	        _react2.default.createElement(
	          'a',
	          { href: '#', onClick: this.pageBtnClick, className: 'page-link' },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return PageButton;
	}(_react.Component);

	PageButton.propTypes = {
	  title: _react.PropTypes.string,
	  changePage: _react.PropTypes.func,
	  active: _react.PropTypes.bool,
	  disable: _react.PropTypes.bool,
	  hidden: _react.PropTypes.bool,
	  children: _react.PropTypes.node
	};

	var _default = PageButton;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(PageButton, 'PageButton', '/Users/garettarrowood/Power/react-bootstrap-table/src/pagination/PageButton.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/pagination/PageButton.js');
	}();

	;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SizePerPageDropDown = function (_Component) {
	  _inherits(SizePerPageDropDown, _Component);

	  function SizePerPageDropDown() {
	    _classCallCheck(this, SizePerPageDropDown);

	    return _possibleConstructorReturn(this, (SizePerPageDropDown.__proto__ || Object.getPrototypeOf(SizePerPageDropDown)).apply(this, arguments));
	  }

	  _createClass(SizePerPageDropDown, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          open = _props.open,
	          hidden = _props.hidden,
	          onClick = _props.onClick,
	          options = _props.options,
	          className = _props.className,
	          variation = _props.variation,
	          btnContextual = _props.btnContextual,
	          currSizePerPage = _props.currSizePerPage;


	      var openClass = open ? 'open' : '';
	      var dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };

	      return _react2.default.createElement(
	        'span',
	        { className: variation + ' ' + openClass + ' ' + className, style: dropDownStyle },
	        _react2.default.createElement(
	          'button',
	          { className: 'btn ' + btnContextual + ' dropdown-toggle',
	            id: 'pageDropDown', 'data-toggle': 'dropdown',
	            'aria-expanded': open,
	            onClick: onClick },
	          currSizePerPage,
	          _react2.default.createElement(
	            'span',
	            null,
	            ' ',
	            _react2.default.createElement('span', { className: 'caret' })
	          )
	        ),
	        _react2.default.createElement(
	          'ul',
	          { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
	          options
	        )
	      );
	    }
	  }]);

	  return SizePerPageDropDown;
	}(_react.Component);

	SizePerPageDropDown.propTypes = {
	  open: _react.PropTypes.bool,
	  hidden: _react.PropTypes.bool,
	  btnContextual: _react.PropTypes.string,
	  currSizePerPage: _react.PropTypes.string,
	  options: _react.PropTypes.array,
	  variation: _react.PropTypes.oneOf(['dropdown', 'dropup']),
	  className: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};
	SizePerPageDropDown.defaultProps = {
	  open: false,
	  hidden: false,
	  btnContextual: 'btn-default',
	  variation: 'dropdown',
	  className: ''
	};

	var _default = SizePerPageDropDown;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(SizePerPageDropDown, 'SizePerPageDropDown', '/Users/garettarrowood/Power/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/pagination/SizePerPageDropDown.js');
	}();

	;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp; /* eslint no-console: 0 */

	// import classSet from 'classnames';

	// import editor from '../Editor';


	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactModal = __webpack_require__(199);

	var _reactModal2 = _interopRequireDefault(_reactModal);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _InsertModal = __webpack_require__(215);

	var _InsertModal2 = _interopRequireDefault(_InsertModal);

	var _InsertButton = __webpack_require__(219);

	var _InsertButton2 = _interopRequireDefault(_InsertButton);

	var _DeleteButton = __webpack_require__(220);

	var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

	var _ExportCSVButton = __webpack_require__(221);

	var _ExportCSVButton2 = _interopRequireDefault(_ExportCSVButton);

	var _ShowSelectedOnlyButton = __webpack_require__(222);

	var _ShowSelectedOnlyButton2 = _interopRequireDefault(_ShowSelectedOnlyButton);

	var _SearchField = __webpack_require__(223);

	var _SearchField2 = _interopRequireDefault(_SearchField);

	var _ClearSearchButton = __webpack_require__(224);

	var _ClearSearchButton2 = _interopRequireDefault(_ClearSearchButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ToolBar = (_temp = _class = function (_Component) {
	  _inherits(ToolBar, _Component);

	  function ToolBar(props) {
	    var _arguments = arguments;

	    _classCallCheck(this, ToolBar);

	    var _this = _possibleConstructorReturn(this, (ToolBar.__proto__ || Object.getPrototypeOf(ToolBar)).call(this, props));

	    _this.handleSaveBtnClick = function () {
	      return _this.__handleSaveBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleModalClose = function () {
	      return _this.__handleModalClose__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleModalOpen = function () {
	      return _this.__handleModalOpen__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleShowOnlyToggle = function () {
	      return _this.__handleShowOnlyToggle__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleDropRowBtnClick = function () {
	      return _this.__handleDropRowBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleDebounce = function (func, wait, immediate) {
	      var timeout = void 0;

	      return function () {
	        var later = function later() {
	          timeout = null;

	          if (!immediate) {
	            func.apply(_this, _arguments);
	          }
	        };

	        var callNow = immediate && !timeout;

	        clearTimeout(timeout);

	        timeout = setTimeout(later, wait || 0);

	        if (callNow) {
	          func.appy(_this, _arguments);
	        }
	      };
	    };

	    _this.handleKeyUp = function () {
	      return _this.__handleKeyUp__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleExportCSV = function () {
	      return _this.__handleExportCSV__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleClearBtnClick = function () {
	      return _this.__handleClearBtnClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.timeouteClear = 0;
	    _this.modalClassName;
	    _this.state = {
	      isInsertModalOpen: false,
	      validateState: null,
	      shakeEditor: false,
	      showSelected: false
	    };
	    return _this;
	  }

	  _createClass(ToolBar, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var delay = this.props.searchDelayTime ? this.props.searchDelayTime : 0;
	      this.debounceCallback = this.handleDebounce(function () {
	        var seachInput = _this2.refs.seachInput;

	        seachInput && _this2.props.onSearch(seachInput.getValue());
	      }, delay);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.reset) {
	        this.setSearchInput('');
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearTimeout();
	    }
	  }, {
	    key: 'setSearchInput',
	    value: function setSearchInput(text) {
	      var seachInput = this.refs.seachInput;

	      if (seachInput && seachInput.value !== text) {
	        seachInput.value = text;
	      }
	    }
	  }, {
	    key: 'clearTimeout',
	    value: function (_clearTimeout) {
	      function clearTimeout() {
	        return _clearTimeout.apply(this, arguments);
	      }

	      clearTimeout.toString = function () {
	        return _clearTimeout.toString();
	      };

	      return clearTimeout;
	    }(function () {
	      if (this.timeouteClear) {
	        clearTimeout(this.timeouteClear);
	        this.timeouteClear = 0;
	      }
	    })
	  }, {
	    key: 'validateNewRow',
	    value: function validateNewRow(newRow) {
	      var _this3 = this;

	      var validateState = {};
	      var isValid = true;
	      var tempMsg = void 0;
	      var responseType = void 0;

	      this.props.columns.forEach(function (column) {
	        if (column.editable && column.editable.validator) {
	          // process validate
	          tempMsg = column.editable.validator(newRow[column.field]);
	          responseType = typeof tempMsg === 'undefined' ? 'undefined' : _typeof(tempMsg);
	          if (responseType !== 'object' && tempMsg !== true) {
	            _this3.refs.notifier.notice('error', 'Form validate errors, please checking!', 'Pressed ESC can cancel');
	            isValid = false;
	            validateState[column.field] = tempMsg;
	          } else if (responseType === 'object' && tempMsg.isValid !== true) {
	            _this3.refs.notifier.notice(tempMsg.notification.type, tempMsg.notification.msg, tempMsg.notification.title);
	            isValid = false;
	            validateState[column.field] = tempMsg.notification.msg;
	          }
	        }
	      });

	      if (isValid) {
	        return true;
	      } else {
	        this.clearTimeout();
	        // show error in form and shake it
	        this.setState({ validateState: validateState, shakeEditor: true });
	        this.timeouteClear = setTimeout(function () {
	          _this3.setState({ shakeEditor: false });
	        }, 300);
	        return null;
	      }
	    }
	  }, {
	    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
	    value: function __handleSaveBtnClick__REACT_HOT_LOADER__() {
	      return this.__handleSaveBtnClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
	    value: function __handleSaveBtnClick__REACT_HOT_LOADER__(newRow) {
	      var _this4 = this;

	      if (!this.validateNewRow(newRow)) {
	        // validation fail
	        return;
	      }
	      var msg = this.props.onAddRow(newRow);
	      if (msg) {
	        this.refs.notifier.notice('error', msg, 'Pressed ESC can cancel');
	        this.clearTimeout();
	        // shake form and hack prevent modal hide
	        this.setState({
	          shakeEditor: true,
	          validateState: 'this is hack for prevent bootstrap modal hide'
	        });
	        // clear animate class
	        this.timeouteClear = setTimeout(function () {
	          _this4.setState({ shakeEditor: false });
	        }, 300);
	      } else {
	        // reset state and hide modal hide
	        this.setState({
	          validateState: null,
	          shakeEditor: false,
	          isInsertModalOpen: false
	        });
	      }
	    }
	  }, {
	    key: '__handleModalClose__REACT_HOT_LOADER__',
	    value: function __handleModalClose__REACT_HOT_LOADER__() {
	      return this.__handleModalClose__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleModalClose__REACT_HOT_LOADER__',
	    value: function __handleModalClose__REACT_HOT_LOADER__() {
	      this.setState({ isInsertModalOpen: false });
	    }
	  }, {
	    key: '__handleModalOpen__REACT_HOT_LOADER__',
	    value: function __handleModalOpen__REACT_HOT_LOADER__() {
	      return this.__handleModalOpen__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleModalOpen__REACT_HOT_LOADER__',
	    value: function __handleModalOpen__REACT_HOT_LOADER__() {
	      this.setState({ isInsertModalOpen: true });
	    }
	  }, {
	    key: '__handleShowOnlyToggle__REACT_HOT_LOADER__',
	    value: function __handleShowOnlyToggle__REACT_HOT_LOADER__() {
	      return this.__handleShowOnlyToggle__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleShowOnlyToggle__REACT_HOT_LOADER__',
	    value: function __handleShowOnlyToggle__REACT_HOT_LOADER__() {
	      this.setState({
	        showSelected: !this.state.showSelected
	      });
	      this.props.onShowOnlySelected();
	    }
	  }, {
	    key: '__handleDropRowBtnClick__REACT_HOT_LOADER__',
	    value: function __handleDropRowBtnClick__REACT_HOT_LOADER__() {
	      return this.__handleDropRowBtnClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleDropRowBtnClick__REACT_HOT_LOADER__',
	    value: function __handleDropRowBtnClick__REACT_HOT_LOADER__() {
	      this.props.onDropRow();
	    }
	  }, {
	    key: 'handleCloseBtn',
	    value: function handleCloseBtn() {
	      this.refs.warning.style.display = 'none';
	    }
	  }, {
	    key: '__handleKeyUp__REACT_HOT_LOADER__',
	    value: function __handleKeyUp__REACT_HOT_LOADER__() {
	      return this.__handleKeyUp__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleKeyUp__REACT_HOT_LOADER__',
	    value: function __handleKeyUp__REACT_HOT_LOADER__(event) {
	      event.persist();
	      this.debounceCallback(event);
	    }
	  }, {
	    key: '__handleExportCSV__REACT_HOT_LOADER__',
	    value: function __handleExportCSV__REACT_HOT_LOADER__() {
	      return this.__handleExportCSV__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleExportCSV__REACT_HOT_LOADER__',
	    value: function __handleExportCSV__REACT_HOT_LOADER__() {
	      this.props.onExportCSV();
	    }
	  }, {
	    key: '__handleClearBtnClick__REACT_HOT_LOADER__',
	    value: function __handleClearBtnClick__REACT_HOT_LOADER__() {
	      return this.__handleClearBtnClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleClearBtnClick__REACT_HOT_LOADER__',
	    value: function __handleClearBtnClick__REACT_HOT_LOADER__() {
	      var seachInput = this.refs.seachInput;

	      seachInput && seachInput.setValue('');
	      this.props.onSearch('');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.modalClassName = 'bs-table-modal-sm' + ToolBar.modalSeq++;
	      var toolbar = null;
	      var btnGroup = null;
	      var insertBtn = null;
	      var deleteBtn = null;
	      var exportCSVBtn = null;
	      var showSelectedOnlyBtn = null;

	      if (this.props.enableInsert) {
	        if (this.props.insertBtn) {
	          insertBtn = this.renderCustomBtn(this.props.insertBtn, [this.handleModalOpen], _InsertButton2.default.name, 'onClick', this.handleModalOpen);
	        } else {
	          insertBtn = _react2.default.createElement(_InsertButton2.default, { btnText: this.props.insertText,
	            onClick: this.handleModalOpen });
	        }
	      }

	      if (this.props.enableDelete) {
	        if (this.props.deleteBtn) {
	          deleteBtn = this.renderCustomBtn(this.props.deleteBtn, [this.handleDropRowBtnClick], _DeleteButton2.default.name, 'onClick', this.handleDropRowBtnClick);
	        } else {
	          deleteBtn = _react2.default.createElement(_DeleteButton2.default, { btnText: this.props.deleteText,
	            onClick: this.handleDropRowBtnClick });
	        }
	      }

	      if (this.props.enableShowOnlySelected) {
	        if (this.props.showSelectedOnlyBtn) {
	          showSelectedOnlyBtn = this.renderCustomBtn(this.props.showSelectedOnlyBtn, [this.handleShowOnlyToggle, this.state.showSelected], _ShowSelectedOnlyButton2.default.name, 'onClick', this.handleShowOnlyToggle);
	        } else {
	          showSelectedOnlyBtn = _react2.default.createElement(_ShowSelectedOnlyButton2.default, { toggle: this.state.showSelected,
	            onClick: this.handleShowOnlyToggle });
	        }
	      }

	      if (this.props.enableExportCSV) {
	        if (this.props.exportCSVBtn) {
	          exportCSVBtn = this.renderCustomBtn(this.props.exportCSVBtn, [this.handleExportCSV], _ExportCSVButton2.default.name, 'onClick', this.handleExportCSV);
	        } else {
	          exportCSVBtn = _react2.default.createElement(_ExportCSVButton2.default, { btnText: this.props.exportCSVText,
	            onClick: this.handleExportCSV });
	        }
	      }

	      if (this.props.btnGroup) {
	        btnGroup = this.props.btnGroup({
	          exportCSVBtn: exportCSVBtn,
	          insertBtn: insertBtn,
	          deleteBtn: deleteBtn,
	          showSelectedOnlyBtn: showSelectedOnlyBtn
	        });
	      } else {
	        btnGroup = _react2.default.createElement(
	          'div',
	          { className: 'btn-group btn-group-sm', role: 'group' },
	          exportCSVBtn,
	          insertBtn,
	          deleteBtn,
	          showSelectedOnlyBtn
	        );
	      }

	      var _renderSearchPanel = this.renderSearchPanel(),
	          _renderSearchPanel2 = _slicedToArray(_renderSearchPanel, 3),
	          searchPanel = _renderSearchPanel2[0],
	          searchField = _renderSearchPanel2[1],
	          clearBtn = _renderSearchPanel2[2];

	      var modal = this.props.enableInsert ? this.renderInsertRowModal() : null;

	      if (this.props.toolBar) {
	        toolbar = this.props.toolBar({
	          components: {
	            exportCSVBtn: exportCSVBtn,
	            insertBtn: insertBtn,
	            deleteBtn: deleteBtn,
	            showSelectedOnlyBtn: showSelectedOnlyBtn,
	            searchPanel: searchPanel,
	            btnGroup: btnGroup,
	            searchField: searchField,
	            clearBtn: clearBtn
	          },
	          event: {
	            openInsertModal: this.handleModalOpen,
	            closeInsertModal: this.handleModalClose,
	            dropRow: this.handleDropRowBtnClick,
	            showOnlyToogle: this.handleShowOnlyToggle,
	            exportCSV: this.handleExportCSV,
	            search: this.props.onSearch
	          }
	        });
	      } else {
	        toolbar = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-8' },
	            this.props.searchPosition === 'left' ? searchPanel : btnGroup
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-4' },
	            this.props.searchPosition === 'left' ? btnGroup : searchPanel
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        toolbar,
	        modal
	      );
	    }
	  }, {
	    key: 'renderSearchPanel',
	    value: function renderSearchPanel() {
	      if (this.props.enableSearch) {
	        var classNames = 'form-group form-group-sm react-bs-table-search-form';
	        var clearBtn = null;
	        var searchField = null;
	        var searchPanel = null;
	        if (this.props.clearSearch) {
	          if (this.props.clearSearchBtn) {
	            clearBtn = this.renderCustomBtn(this.props.clearSearchBtn, [this.handleClearBtnClick], _ClearSearchButton2.default.name, 'onClick', this.handleClearBtnClick); /* eslint max-len: 0*/
	          } else {
	            clearBtn = _react2.default.createElement(_ClearSearchButton2.default, { onClick: this.handleClearBtnClick });
	          }
	          classNames += ' input-group input-group-sm';
	        }

	        if (this.props.searchField) {
	          searchField = this.props.searchField({
	            search: this.handleKeyUp,
	            defaultValue: this.props.defaultSearch,
	            placeholder: this.props.searchPlaceholder
	          });
	          if (searchField.type.name === _SearchField2.default.name) {
	            searchField = _react2.default.cloneElement(searchField, {
	              ref: 'seachInput',
	              onKeyUp: this.handleKeyUp
	            });
	          } else {
	            searchField = _react2.default.cloneElement(searchField, {
	              ref: 'seachInput'
	            });
	          }
	        } else {
	          searchField = _react2.default.createElement(_SearchField2.default, { ref: 'seachInput',
	            defaultValue: this.props.defaultSearch,
	            placeholder: this.props.searchPlaceholder,
	            onKeyUp: this.handleKeyUp });
	        }
	        if (this.props.searchPanel) {
	          searchPanel = this.props.searchPanel({
	            searchField: searchField, clearBtn: clearBtn,
	            search: this.props.onSearch,
	            defaultValue: this.props.defaultSearch,
	            placeholder: this.props.searchPlaceholder,
	            clearBtnClick: this.handleClearBtnClick
	          });
	        } else {
	          searchPanel = _react2.default.createElement(
	            'div',
	            { className: classNames },
	            searchField,
	            _react2.default.createElement(
	              'span',
	              { className: 'input-group-btn' },
	              clearBtn
	            )
	          );
	        }
	        return [searchPanel, searchField, clearBtn];
	      } else {
	        return [];
	      }
	    }
	  }, {
	    key: 'renderInsertRowModal',
	    value: function renderInsertRowModal() {
	      var validateState = this.state.validateState || {};
	      var _props = this.props,
	          columns = _props.columns,
	          ignoreEditable = _props.ignoreEditable,
	          insertModalHeader = _props.insertModalHeader,
	          insertModalBody = _props.insertModalBody,
	          insertModalFooter = _props.insertModalFooter,
	          insertModal = _props.insertModal;


	      var modal = void 0;
	      modal = insertModal && insertModal(this.handleModalClose, this.handleSaveBtnClick, columns, validateState, ignoreEditable);

	      if (!modal) {
	        modal = _react2.default.createElement(_InsertModal2.default, {
	          columns: columns,
	          validateState: validateState,
	          ignoreEditable: ignoreEditable,
	          onModalClose: this.handleModalClose,
	          onSave: this.handleSaveBtnClick,
	          headerComponent: insertModalHeader,
	          bodyComponent: insertModalBody,
	          footerComponent: insertModalFooter });
	      }

	      return _react2.default.createElement(
	        _reactModal2.default,
	        { className: 'react-bs-insert-modal modal-dialog',
	          isOpen: this.state.isInsertModalOpen,
	          onRequestClose: this.handleModalClose,
	          contentLabel: 'Modal' },
	        modal
	      );
	    }
	  }, {
	    key: 'renderCustomBtn',
	    value: function renderCustomBtn(cb, params, componentName, eventName, event) {
	      var element = cb.apply(null, params);
	      if (element.type.name === componentName && !element.props[eventName]) {
	        var props = {};
	        props[eventName] = event;
	        element = _react2.default.cloneElement(element, props);
	      }
	      return element;
	    }
	  }]);

	  return ToolBar;
	}(_react.Component), _class.modalSeq = 0, _temp);


	ToolBar.propTypes = {
	  onAddRow: _react.PropTypes.func,
	  onDropRow: _react.PropTypes.func,
	  onShowOnlySelected: _react.PropTypes.func,
	  enableInsert: _react.PropTypes.bool,
	  enableDelete: _react.PropTypes.bool,
	  enableSearch: _react.PropTypes.bool,
	  enableShowOnlySelected: _react.PropTypes.bool,
	  columns: _react.PropTypes.array,
	  searchPlaceholder: _react.PropTypes.string,
	  exportCSVText: _react.PropTypes.string,
	  insertText: _react.PropTypes.string,
	  deleteText: _react.PropTypes.string,
	  saveText: _react.PropTypes.string,
	  closeText: _react.PropTypes.string,
	  clearSearch: _react.PropTypes.bool,
	  ignoreEditable: _react.PropTypes.bool,
	  defaultSearch: _react.PropTypes.string,
	  insertModalHeader: _react.PropTypes.func,
	  insertModalBody: _react.PropTypes.func,
	  insertModalFooter: _react.PropTypes.func,
	  insertModal: _react.PropTypes.func,
	  insertBtn: _react.PropTypes.func,
	  deleteBtn: _react.PropTypes.func,
	  showSelectedOnlyBtn: _react.PropTypes.func,
	  exportCSVBtn: _react.PropTypes.func,
	  clearSearchBtn: _react.PropTypes.func,
	  searchField: _react.PropTypes.func,
	  searchPanel: _react.PropTypes.func,
	  btnGroup: _react.PropTypes.func,
	  toolBar: _react.PropTypes.func,
	  searchPosition: _react.PropTypes.string,
	  reset: _react.PropTypes.bool
	};

	ToolBar.defaultProps = {
	  reset: false,
	  enableInsert: false,
	  enableDelete: false,
	  enableSearch: false,
	  enableShowOnlySelected: false,
	  clearSearch: false,
	  ignoreEditable: false,
	  exportCSVText: _Const2.default.EXPORT_CSV_TEXT,
	  insertText: _Const2.default.INSERT_BTN_TEXT,
	  deleteText: _Const2.default.DELETE_BTN_TEXT,
	  saveText: _Const2.default.SAVE_BTN_TEXT,
	  closeText: _Const2.default.CLOSE_BTN_TEXT
	};

	var _default = ToolBar;
	exports.default = _default;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ToolBar, 'ToolBar', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ToolBar.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ToolBar.js');
	}();

	;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(200);



/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(6);
	var DOMFactories = __webpack_require__(201);
	var PropTypes = __webpack_require__(13);
	var ExecutionEnvironment = __webpack_require__(202);
	var ModalPortal = React.createFactory(__webpack_require__(203));
	var ariaAppHider = __webpack_require__(212);
	var refCount = __webpack_require__(213);
	var elementClass = __webpack_require__(214);
	var renderSubtreeIntoContainer = __webpack_require__(6).unstable_renderSubtreeIntoContainer;
	var Assign = __webpack_require__(207);
	var createReactClass = __webpack_require__(208);

	var SafeHTMLElement = ExecutionEnvironment.canUseDOM ? window.HTMLElement : {};
	var AppElement = ExecutionEnvironment.canUseDOM ? document.body : {appendChild: function() {}};

	function getParentElement(parentSelector) {
	  return parentSelector();
	}

	var Modal = createReactClass({

	  displayName: 'Modal',
	  statics: {
	    setAppElement: function(element) {
	        AppElement = ariaAppHider.setElement(element);
	    },
	    injectCSS: function() {
	      "production" !== process.env.NODE_ENV
	        && console.warn('React-Modal: injectCSS has been deprecated ' +
	                        'and no longer has any effect. It will be removed in a later version');
	    }
	  },

	  propTypes: {
	    isOpen: PropTypes.bool.isRequired,
	    style: PropTypes.shape({
	      content: PropTypes.object,
	      overlay: PropTypes.object
	    }),
	    portalClassName: PropTypes.string,
	    bodyOpenClassName: PropTypes.string,
	    appElement: PropTypes.instanceOf(SafeHTMLElement),
	    onAfterOpen: PropTypes.func,
	    onRequestClose: PropTypes.func,
	    closeTimeoutMS: PropTypes.number,
	    ariaHideApp: PropTypes.bool,
	    shouldCloseOnOverlayClick: PropTypes.bool,
	    parentSelector: PropTypes.func,
	    role: PropTypes.string,
	    contentLabel: PropTypes.string.isRequired
	  },

	  getDefaultProps: function () {
	    return {
	      isOpen: false,
	      portalClassName: 'ReactModalPortal',
	      bodyOpenClassName: 'ReactModal__Body--open',
	      ariaHideApp: true,
	      closeTimeoutMS: 0,
	      shouldCloseOnOverlayClick: true,
	      parentSelector: function () { return document.body; }
	    };
	  },

	  componentDidMount: function() {
	    this.node = document.createElement('div');
	    this.node.className = this.props.portalClassName;

	    if (this.props.isOpen) refCount.add(this);

	    var parent = getParentElement(this.props.parentSelector);
	    parent.appendChild(this.node);
	    this.renderPortal(this.props);
	  },

	  componentWillUpdate: function(newProps) {
	    if(newProps.portalClassName !== this.props.portalClassName) {
	      this.node.className = newProps.portalClassName;
	    }
	  },

	  componentWillReceiveProps: function(newProps) {
	    if (newProps.isOpen) refCount.add(this);
	    if (!newProps.isOpen) refCount.remove(this);
	    var currentParent = getParentElement(this.props.parentSelector);
	    var newParent = getParentElement(newProps.parentSelector);

	    if(newParent !== currentParent) {
	      currentParent.removeChild(this.node);
	      newParent.appendChild(this.node);
	    }

	    this.renderPortal(newProps);
	  },

	  componentWillUnmount: function() {
	    if (!this.node) return;

	    refCount.remove(this);

	    if (this.props.ariaHideApp) {
	      ariaAppHider.show(this.props.appElement);
	    }

	    var state = this.portal.state;
	    var now = Date.now();
	    var closesAt = state.isOpen && this.props.closeTimeoutMS
	      && (state.closesAt
	        || now + this.props.closeTimeoutMS);

	    if (closesAt) {
	      if (!state.beforeClose) {
	        this.portal.closeWithTimeout();
	      }

	      var that = this;
	      setTimeout(function() { that.removePortal(); }, closesAt - now);
	    } else {
	      this.removePortal();
	    }
	  },

	  removePortal: function() {
	    ReactDOM.unmountComponentAtNode(this.node);
	    var parent = getParentElement(this.props.parentSelector);
	    parent.removeChild(this.node);

	    if (refCount.count() === 0) {
	      elementClass(document.body).remove(this.props.bodyOpenClassName);
	    }
	  },

	  renderPortal: function(props) {
	    if (props.isOpen || refCount.count() > 0) {
	      elementClass(document.body).add(this.props.bodyOpenClassName);
	    } else {
	      elementClass(document.body).remove(this.props.bodyOpenClassName);
	    }

	    if (props.ariaHideApp) {
	      ariaAppHider.toggle(props.isOpen, props.appElement);
	    }

	    this.portal = renderSubtreeIntoContainer(this, ModalPortal(Assign({}, props, {defaultStyles: Modal.defaultStyles})), this.node);
	  },

	  render: function () {
	    return DOMFactories.noscript();
	  }
	});

	Modal.defaultStyles = {
	  overlay: {
	    position        : 'fixed',
	    top             : 0,
	    left            : 0,
	    right           : 0,
	    bottom          : 0,
	    backgroundColor : 'rgba(255, 255, 255, 0.75)'
	  },
	  content: {
	    position                : 'absolute',
	    top                     : '40px',
	    left                    : '40px',
	    right                   : '40px',
	    bottom                  : '40px',
	    border                  : '1px solid #ccc',
	    background              : '#fff',
	    overflow                : 'auto',
	    WebkitOverflowScrolling : 'touch',
	    borderRadius            : '4px',
	    outline                 : 'none',
	    padding                 : '20px'
	  }
	}

	module.exports = Modal

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function(f) {
	  if (true) {
	    module.exports = f(__webpack_require__(2));
	    /* global define */
	  } else if (typeof define === 'function' && define.amd) {
	    define(['react'], f);
	  } else {
	    var g;
	    if (typeof window !== 'undefined') {
	      g = window;
	    } else if (typeof global !== 'undefined') {
	      g = global;
	    } else if (typeof self !== 'undefined') {
	      g = self;
	    } else {
	      g = this;
	    }

	    if (typeof g.React === 'undefined') {
	      throw Error('React module should be required before ReactDOMFactories');
	    }

	    g.ReactDOMFactories = f(g.React);
	  }
	})(function(React) {
	  /**
	   * Create a factory that creates HTML tag elements.
	   */
	  var createDOMFactory = React.createFactory;

	  /**
	   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	   */
	  var ReactDOMFactories = {
	    a: createDOMFactory('a'),
	    abbr: createDOMFactory('abbr'),
	    address: createDOMFactory('address'),
	    area: createDOMFactory('area'),
	    article: createDOMFactory('article'),
	    aside: createDOMFactory('aside'),
	    audio: createDOMFactory('audio'),
	    b: createDOMFactory('b'),
	    base: createDOMFactory('base'),
	    bdi: createDOMFactory('bdi'),
	    bdo: createDOMFactory('bdo'),
	    big: createDOMFactory('big'),
	    blockquote: createDOMFactory('blockquote'),
	    body: createDOMFactory('body'),
	    br: createDOMFactory('br'),
	    button: createDOMFactory('button'),
	    canvas: createDOMFactory('canvas'),
	    caption: createDOMFactory('caption'),
	    cite: createDOMFactory('cite'),
	    code: createDOMFactory('code'),
	    col: createDOMFactory('col'),
	    colgroup: createDOMFactory('colgroup'),
	    data: createDOMFactory('data'),
	    datalist: createDOMFactory('datalist'),
	    dd: createDOMFactory('dd'),
	    del: createDOMFactory('del'),
	    details: createDOMFactory('details'),
	    dfn: createDOMFactory('dfn'),
	    dialog: createDOMFactory('dialog'),
	    div: createDOMFactory('div'),
	    dl: createDOMFactory('dl'),
	    dt: createDOMFactory('dt'),
	    em: createDOMFactory('em'),
	    embed: createDOMFactory('embed'),
	    fieldset: createDOMFactory('fieldset'),
	    figcaption: createDOMFactory('figcaption'),
	    figure: createDOMFactory('figure'),
	    footer: createDOMFactory('footer'),
	    form: createDOMFactory('form'),
	    h1: createDOMFactory('h1'),
	    h2: createDOMFactory('h2'),
	    h3: createDOMFactory('h3'),
	    h4: createDOMFactory('h4'),
	    h5: createDOMFactory('h5'),
	    h6: createDOMFactory('h6'),
	    head: createDOMFactory('head'),
	    header: createDOMFactory('header'),
	    hgroup: createDOMFactory('hgroup'),
	    hr: createDOMFactory('hr'),
	    html: createDOMFactory('html'),
	    i: createDOMFactory('i'),
	    iframe: createDOMFactory('iframe'),
	    img: createDOMFactory('img'),
	    input: createDOMFactory('input'),
	    ins: createDOMFactory('ins'),
	    kbd: createDOMFactory('kbd'),
	    keygen: createDOMFactory('keygen'),
	    label: createDOMFactory('label'),
	    legend: createDOMFactory('legend'),
	    li: createDOMFactory('li'),
	    link: createDOMFactory('link'),
	    main: createDOMFactory('main'),
	    map: createDOMFactory('map'),
	    mark: createDOMFactory('mark'),
	    menu: createDOMFactory('menu'),
	    menuitem: createDOMFactory('menuitem'),
	    meta: createDOMFactory('meta'),
	    meter: createDOMFactory('meter'),
	    nav: createDOMFactory('nav'),
	    noscript: createDOMFactory('noscript'),
	    object: createDOMFactory('object'),
	    ol: createDOMFactory('ol'),
	    optgroup: createDOMFactory('optgroup'),
	    option: createDOMFactory('option'),
	    output: createDOMFactory('output'),
	    p: createDOMFactory('p'),
	    param: createDOMFactory('param'),
	    picture: createDOMFactory('picture'),
	    pre: createDOMFactory('pre'),
	    progress: createDOMFactory('progress'),
	    q: createDOMFactory('q'),
	    rp: createDOMFactory('rp'),
	    rt: createDOMFactory('rt'),
	    ruby: createDOMFactory('ruby'),
	    s: createDOMFactory('s'),
	    samp: createDOMFactory('samp'),
	    script: createDOMFactory('script'),
	    section: createDOMFactory('section'),
	    select: createDOMFactory('select'),
	    small: createDOMFactory('small'),
	    source: createDOMFactory('source'),
	    span: createDOMFactory('span'),
	    strong: createDOMFactory('strong'),
	    style: createDOMFactory('style'),
	    sub: createDOMFactory('sub'),
	    summary: createDOMFactory('summary'),
	    sup: createDOMFactory('sup'),
	    table: createDOMFactory('table'),
	    tbody: createDOMFactory('tbody'),
	    td: createDOMFactory('td'),
	    textarea: createDOMFactory('textarea'),
	    tfoot: createDOMFactory('tfoot'),
	    th: createDOMFactory('th'),
	    thead: createDOMFactory('thead'),
	    time: createDOMFactory('time'),
	    title: createDOMFactory('title'),
	    tr: createDOMFactory('tr'),
	    track: createDOMFactory('track'),
	    u: createDOMFactory('u'),
	    ul: createDOMFactory('ul'),
	    var: createDOMFactory('var'),
	    video: createDOMFactory('video'),
	    wbr: createDOMFactory('wbr'),

	    // SVG
	    circle: createDOMFactory('circle'),
	    clipPath: createDOMFactory('clipPath'),
	    defs: createDOMFactory('defs'),
	    ellipse: createDOMFactory('ellipse'),
	    g: createDOMFactory('g'),
	    image: createDOMFactory('image'),
	    line: createDOMFactory('line'),
	    linearGradient: createDOMFactory('linearGradient'),
	    mask: createDOMFactory('mask'),
	    path: createDOMFactory('path'),
	    pattern: createDOMFactory('pattern'),
	    polygon: createDOMFactory('polygon'),
	    polyline: createDOMFactory('polyline'),
	    radialGradient: createDOMFactory('radialGradient'),
	    rect: createDOMFactory('rect'),
	    stop: createDOMFactory('stop'),
	    svg: createDOMFactory('svg'),
	    text: createDOMFactory('text'),
	    tspan: createDOMFactory('tspan'),
	  };

	  // due to wrapper and conditionals at the top, this will either become
	  // `module.exports ReactDOMFactories` if that is available,
	  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
	  // if that is available,
	  // otherwise it will be defined as global variable.
	  return ReactDOMFactories;
	});



/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var DOMFactories = __webpack_require__(201);
	var focusManager = __webpack_require__(204);
	var scopeTab = __webpack_require__(206);
	var Assign = __webpack_require__(207);
	var createReactClass = __webpack_require__(208);

	var div = DOMFactories.div;

	// so that our CSS is statically analyzable
	var CLASS_NAMES = {
	  overlay: 'ReactModal__Overlay',
	  content: 'ReactModal__Content'
	};

	var ModalPortal = module.exports = createReactClass({

	  displayName: 'ModalPortal',
	  shouldClose: null,

	  getDefaultProps: function() {
	    return {
	      style: {
	        overlay: {},
	        content: {}
	      }
	    };
	  },

	  getInitialState: function() {
	    return {
	      afterOpen: false,
	      beforeClose: false
	    };
	  },

	  componentDidMount: function() {
	    // Focus needs to be set when mounting and already open
	    if (this.props.isOpen) {
	      this.setFocusAfterRender(true);
	      this.open();
	    }
	  },

	  componentWillUnmount: function() {
	    clearTimeout(this.closeTimer);
	  },

	  componentWillReceiveProps: function(newProps) {
	    // Focus only needs to be set once when the modal is being opened
	    if (!this.props.isOpen && newProps.isOpen) {
	      this.setFocusAfterRender(true);
	      this.open();
	    } else if (this.props.isOpen && !newProps.isOpen) {
	      this.close();
	    }
	  },

	  componentDidUpdate: function () {
	    if (this.focusAfterRender) {
	      this.focusContent();
	      this.setFocusAfterRender(false);
	    }
	  },

	  setFocusAfterRender: function (focus) {
	    this.focusAfterRender = focus;
	  },

	  afterClose: function () {
	    focusManager.returnFocus();
	    focusManager.teardownScopedFocus();
	  },

	  open: function () {
	    if (this.state.afterOpen && this.state.beforeClose) {
	      clearTimeout(this.closeTimer);
	      this.setState({ beforeClose: false });
	    } else {
	      focusManager.setupScopedFocus(this.node);
	      focusManager.markForFocusLater();
	      this.setState({isOpen: true}, function() {
	        this.setState({afterOpen: true});

	        if (this.props.isOpen && this.props.onAfterOpen) {
	          this.props.onAfterOpen();
	        }
	      }.bind(this));
	    }
	  },

	  close: function() {
	    if (this.props.closeTimeoutMS > 0)
	      this.closeWithTimeout();
	    else
	      this.closeWithoutTimeout();
	  },

	  focusContent: function() {
	    // Don't steal focus from inner elements
	    if (!this.contentHasFocus()) {
	      this.refs.content.focus();
	    }
	  },

	  closeWithTimeout: function() {
	    var closesAt = Date.now() + this.props.closeTimeoutMS;
	    this.setState({beforeClose: true, closesAt: closesAt}, function() {
	      this.closeTimer = setTimeout(this.closeWithoutTimeout, this.state.closesAt - Date.now());
	    }.bind(this));
	  },

	  closeWithoutTimeout: function() {
	    this.setState({
	      beforeClose: false,
	      isOpen: false,
	      afterOpen: false,
	      closesAt: null
	    }, this.afterClose);
	  },

	  handleKeyDown: function(event) {
	    if (event.keyCode == 9 /*tab*/) scopeTab(this.refs.content, event);
	    if (event.keyCode == 27 /*esc*/) {
	      event.preventDefault();
	      this.requestClose(event);
	    }
	  },

	  handleOverlayOnClick: function (event) {
	    if (this.shouldClose === null) {
	      this.shouldClose = true;
	    }

	    if (this.shouldClose && this.props.shouldCloseOnOverlayClick) {
	      if (this.ownerHandlesClose())
	        this.requestClose(event);
	      else
	        this.focusContent();
	    }
	    this.shouldClose = null;
	  },

	  handleContentOnClick: function () {
	    this.shouldClose = false;
	  },

	  requestClose: function(event) {
	    if (this.ownerHandlesClose())
	      this.props.onRequestClose(event);
	  },

	  ownerHandlesClose: function() {
	    return this.props.onRequestClose;
	  },

	  shouldBeClosed: function() {
	    return !this.state.isOpen && !this.state.beforeClose;
	  },

	  contentHasFocus: function() {
	    return document.activeElement === this.refs.content || this.refs.content.contains(document.activeElement);
	  },

	  buildClassName: function(which, additional) {
	    var classNames = (typeof additional === 'object') ? additional : {
	      base: CLASS_NAMES[which],
	      afterOpen: CLASS_NAMES[which] + "--after-open",
	      beforeClose: CLASS_NAMES[which] + "--before-close"
	    };
	    var className = classNames.base;
	    if (this.state.afterOpen) { className += " " + classNames.afterOpen; }
	    if (this.state.beforeClose) { className += " " + classNames.beforeClose; }
	    return (typeof additional === 'string' && additional) ? [className, additional].join(" ") : className;
	  },

	  render: function() {
	    var contentStyles = (this.props.className) ? {} : this.props.defaultStyles.content;
	    var overlayStyles = (this.props.overlayClassName) ? {} : this.props.defaultStyles.overlay;

	    return this.shouldBeClosed() ? div() : (
	      div({
	        ref: "overlay",
	        className: this.buildClassName('overlay', this.props.overlayClassName),
	        style: Assign({}, overlayStyles, this.props.style.overlay || {}),
	        onClick: this.handleOverlayOnClick
	      },
	        div({
	          ref: "content",
	          style: Assign({}, contentStyles, this.props.style.content || {}),
	          className: this.buildClassName('content', this.props.className),
	          tabIndex: "-1",
	          onKeyDown: this.handleKeyDown,
	          onClick: this.handleContentOnClick,
	          role: this.props.role,
	          "aria-label": this.props.contentLabel
	        },
	          this.props.children
	        )
	      )
	    );
	  }
	});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var findTabbable = __webpack_require__(205);
	var focusLaterElements = [];
	var modalElement = null;
	var needToFocus = false;

	function handleBlur(event) {
	  needToFocus = true;
	}

	function handleFocus(event) {
	  if (needToFocus) {
	    needToFocus = false;
	    if (!modalElement) {
	      return;
	    }
	    // need to see how jQuery shims document.on('focusin') so we don't need the
	    // setTimeout, firefox doesn't support focusin, if it did, we could focus
	    // the element outside of a setTimeout. Side-effect of this implementation
	    // is that the document.body gets focus, and then we focus our element right
	    // after, seems fine.
	    setTimeout(function() {
	      if (modalElement.contains(document.activeElement))
	        return;
	      var el = (findTabbable(modalElement)[0] || modalElement);
	      el.focus();
	    }, 0);
	  }
	}

	exports.markForFocusLater = function() {
	  focusLaterElements.push(document.activeElement);
	};

	exports.returnFocus = function() {
	  var toFocus = null;
	  try {
	    toFocus = focusLaterElements.pop();
	    toFocus.focus();
	    return;
	  }
	  catch (e) {
	    console.warn('You tried to return focus to '+toFocus+' but it is not in the DOM anymore');
	  }
	};

	exports.setupScopedFocus = function(element) {
	  modalElement = element;

	  if (window.addEventListener) {
	    window.addEventListener('blur', handleBlur, false);
	    document.addEventListener('focus', handleFocus, true);
	  } else {
	    window.attachEvent('onBlur', handleBlur);
	    document.attachEvent('onFocus', handleFocus);
	  }
	};

	exports.teardownScopedFocus = function() {
	  modalElement = null;

	  if (window.addEventListener) {
	    window.removeEventListener('blur', handleBlur);
	    document.removeEventListener('focus', handleFocus);
	  } else {
	    window.detachEvent('onBlur', handleBlur);
	    document.detachEvent('onFocus', handleFocus);
	  }
	};


/***/ }),
/* 205 */
/***/ (function(module, exports) {

	/*!
	 * Adapted from jQuery UI core
	 *
	 * http://jqueryui.com
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * http://api.jqueryui.com/category/ui-core/
	 */

	function focusable(element, isTabIndexNotNaN) {
	  var nodeName = element.nodeName.toLowerCase();
	  return (/input|select|textarea|button|object/.test(nodeName) ?
	    !element.disabled :
	    "a" === nodeName ?
	      element.href || isTabIndexNotNaN :
	      isTabIndexNotNaN) && visible(element);
	}

	function hidden(el) {
	  return (el.offsetWidth <= 0 && el.offsetHeight <= 0) ||
	    el.style.display === 'none';
	}

	function visible(element) {
	  while (element) {
	    if (element === document.body) break;
	    if (hidden(element)) return false;
	    element = element.parentNode;
	  }
	  return true;
	}

	function tabbable(element) {
	  var tabIndex = element.getAttribute('tabindex');
	  if (tabIndex === null) tabIndex = undefined;
	  var isTabIndexNaN = isNaN(tabIndex);
	  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
	}

	function findTabbableDescendants(element) {
	  return [].slice.call(element.querySelectorAll('*'), 0).filter(function(el) {
	    return tabbable(el);
	  });
	}

	module.exports = findTabbableDescendants;



/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	var findTabbable = __webpack_require__(205);

	module.exports = function(node, event) {
	  var tabbable = findTabbable(node);
	  if (!tabbable.length) {
	      event.preventDefault();
	      return;
	  }
	  var finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
	  var leavingFinalTabbable = (
	    finalTabbable === document.activeElement ||
	    // handle immediate shift+tab after opening with mouse
	    node === document.activeElement
	  );
	  if (!leavingFinalTabbable) return;
	  event.preventDefault();
	  var target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
	  target.focus();
	};


/***/ }),
/* 207 */
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = assign;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var React = __webpack_require__(2);
	var factory = __webpack_require__(209);

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(210);

	var emptyObject = __webpack_require__(211);
	var _invariant = __webpack_require__(17);

	if (process.env.NODE_ENV !== 'production') {
	  var warning = __webpack_require__(18);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 210 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 212 */
/***/ (function(module, exports) {

	var _element = typeof document !== 'undefined' ? document.body : null;

	function setElement(element) {
	  if (typeof element === 'string') {
	    var el = document.querySelectorAll(element);
	    element = 'length' in el ? el[0] : el;
	  }
	  _element = element || _element;
	  return _element;
	}

	function hide(appElement) {
	  validateElement(appElement);
	  (appElement || _element).setAttribute('aria-hidden', 'true');
	}

	function show(appElement) {
	  validateElement(appElement);
	  (appElement || _element).removeAttribute('aria-hidden');
	}

	function toggle(shouldHide, appElement) {
	  if (shouldHide)
	    hide(appElement);
	  else
	    show(appElement);
	}

	function validateElement(appElement) {
	  if (!appElement && !_element)
	    throw new Error('react-modal: You must set an element with `Modal.setAppElement(el)` to make this accessible');
	}

	function resetForTesting() {
	  _element = document.body;
	}

	exports.toggle = toggle;
	exports.setElement = setElement;
	exports.show = show;
	exports.hide = hide;
	exports.resetForTesting = resetForTesting;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

	var modals = [];

	module.exports = {
	  add: function (element) {
	    if (modals.indexOf(element) === -1) {
	      modals.push(element);
	    }
	  },
	  remove: function (element) {
	    var index = modals.indexOf(element);
	    if (index === -1) {
	      return;
	    }
	    modals.splice(index, 1);
	  },
	  count: function () {
	    return modals.length;
	  }
	};


/***/ }),
/* 214 */
/***/ (function(module, exports) {

	module.exports = function(opts) {
	  return new ElementClass(opts)
	}

	function indexOf(arr, prop) {
	  if (arr.indexOf) return arr.indexOf(prop)
	  for (var i = 0, len = arr.length; i < len; i++)
	    if (arr[i] === prop) return i
	  return -1
	}

	function ElementClass(opts) {
	  if (!(this instanceof ElementClass)) return new ElementClass(opts)
	  var self = this
	  if (!opts) opts = {}

	  // similar doing instanceof HTMLElement but works in IE8
	  if (opts.nodeType) opts = {el: opts}

	  this.opts = opts
	  this.el = opts.el || document.body
	  if (typeof this.el !== 'object') this.el = document.querySelector(this.el)
	}

	ElementClass.prototype.add = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return el.className = className
	  var classes = el.className.split(' ')
	  if (indexOf(classes, className) > -1) return classes
	  classes.push(className)
	  el.className = classes.join(' ')
	  return classes
	}

	ElementClass.prototype.remove = function(className) {
	  var el = this.el
	  if (!el) return
	  if (el.className === "") return
	  var classes = el.className.split(' ')
	  var idx = indexOf(classes, className)
	  if (idx > -1) classes.splice(idx, 1)
	  el.className = classes.join(' ')
	  return classes
	}

	ElementClass.prototype.has = function(className) {
	  var el = this.el
	  if (!el) return
	  var classes = el.className.split(' ')
	  return indexOf(classes, className) > -1
	}

	ElementClass.prototype.toggle = function(className) {
	  var el = this.el
	  if (!el) return
	  if (this.has(className)) this.remove(className)
	  else this.add(className)
	}


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _InsertModalHeader = __webpack_require__(216);

	var _InsertModalHeader2 = _interopRequireDefault(_InsertModalHeader);

	var _InsertModalFooter = __webpack_require__(217);

	var _InsertModalFooter2 = _interopRequireDefault(_InsertModalFooter);

	var _InsertModalBody = __webpack_require__(218);

	var _InsertModalBody2 = _interopRequireDefault(_InsertModalBody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-console: 0 */

	var defaultModalClassName = 'react-bs-table-insert-modal';

	var InsertModal = function (_Component) {
	  _inherits(InsertModal, _Component);

	  function InsertModal() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InsertModal);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModal.__proto__ || Object.getPrototypeOf(InsertModal)).call.apply(_ref, [this].concat(args))), _this), _this.handleSave = function () {
	      var _this2;

	      return (_this2 = _this).__handleSave__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InsertModal, [{
	    key: '__handleSave__REACT_HOT_LOADER__',
	    value: function __handleSave__REACT_HOT_LOADER__() {
	      return this.__handleSave__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSave__REACT_HOT_LOADER__',
	    value: function __handleSave__REACT_HOT_LOADER__() {
	      var bodyRefs = this.refs.body.child;
	      if (bodyRefs.getFieldValue) {
	        this.props.onSave(bodyRefs.getFieldValue());
	      } else {
	        console.error('Custom InsertModalBody should implement getFieldValue function\n        and should return an object presented as the new row that user input.');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          headerComponent = _props.headerComponent,
	          footerComponent = _props.footerComponent,
	          bodyComponent = _props.bodyComponent;
	      var _props2 = this.props,
	          columns = _props2.columns,
	          validateState = _props2.validateState,
	          ignoreEditable = _props2.ignoreEditable,
	          onModalClose = _props2.onModalClose;

	      var bodyAttr = { columns: columns, validateState: validateState, ignoreEditable: ignoreEditable };

	      bodyComponent = bodyComponent && bodyComponent(columns, validateState, ignoreEditable);

	      headerComponent = headerComponent && headerComponent(onModalClose, this.handleSave);

	      footerComponent = footerComponent && footerComponent(onModalClose, this.handleSave);

	      if (bodyComponent) {
	        bodyComponent = _react2.default.cloneElement(bodyComponent, { ref: 'body' });
	      }

	      if (headerComponent && headerComponent.type.name === _InsertModalHeader2.default.name) {
	        var eventProps = {};
	        if (!headerComponent.props.onModalClose) eventProps.onModalClose = onModalClose;
	        if (!headerComponent.props.onSave) eventProps.onSave = this.handleSave;
	        if (Object.keys(eventProps).length > 0) {
	          headerComponent = _react2.default.cloneElement(headerComponent, eventProps);
	        }
	      } else if (headerComponent && headerComponent.type.name !== _InsertModalHeader2.default.name) {
	        var className = headerComponent.props.className;

	        if (typeof className === 'undefined' || className.indexOf('modal-header') === -1) {
	          headerComponent = _react2.default.createElement(
	            'div',
	            { className: 'modal-header' },
	            headerComponent
	          );
	        }
	      }

	      if (footerComponent && footerComponent.type.name === _InsertModalFooter2.default.name) {
	        var _eventProps = {};
	        if (!footerComponent.props.onModalClose) _eventProps.onModalClose = onModalClose;
	        if (!footerComponent.props.onSave) _eventProps.onSave = this.handleSave;
	        if (Object.keys(_eventProps).length > 0) {
	          footerComponent = _react2.default.cloneElement(footerComponent, _eventProps);
	        }
	      } else if (footerComponent && footerComponent.type.name !== _InsertModalFooter2.default.name) {
	        var _className = footerComponent.props.className;

	        if (typeof _className === 'undefined' || _className.indexOf('modal-footer') === -1) {
	          footerComponent = _react2.default.createElement(
	            'div',
	            { className: 'modal-footer' },
	            footerComponent
	          );
	        }
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal-content ' + defaultModalClassName },
	        headerComponent || _react2.default.createElement(_InsertModalHeader2.default, {
	          className: 'react-bs-table-inser-modal-header',
	          onModalClose: onModalClose }),
	        bodyComponent || _react2.default.createElement(_InsertModalBody2.default, _extends({ ref: 'body' }, bodyAttr)),
	        footerComponent || _react2.default.createElement(_InsertModalFooter2.default, {
	          className: 'react-bs-table-inser-modal-footer',
	          onModalClose: onModalClose,
	          onSave: this.handleSave })
	      );
	    }
	  }]);

	  return InsertModal;
	}(_react.Component);

	exports.default = InsertModal;

	InsertModal.propTypes = {
	  columns: _react.PropTypes.array.isRequired,
	  validateState: _react.PropTypes.object.isRequired,
	  ignoreEditable: _react.PropTypes.bool,
	  headerComponent: _react.PropTypes.func,
	  bodyComponent: _react.PropTypes.func,
	  footerComponent: _react.PropTypes.func,
	  onModalClose: _react.PropTypes.func,
	  onSave: _react.PropTypes.func
	};

	InsertModal.defaultProps = {};
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(defaultModalClassName, 'defaultModalClassName', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertModal.js');

	  __REACT_HOT_LOADER__.register(InsertModal, 'InsertModal', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertModal.js');
	}();

	;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InsertModalHeader = function (_Component) {
	  _inherits(InsertModalHeader, _Component);

	  function InsertModalHeader() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InsertModalHeader);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModalHeader.__proto__ || Object.getPrototypeOf(InsertModalHeader)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseBtnClick = function () {
	      var _this2;

	      return (_this2 = _this).__handleCloseBtnClick__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InsertModalHeader, [{
	    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
	    value: function __handleCloseBtnClick__REACT_HOT_LOADER__() {
	      return this.__handleCloseBtnClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
	    value: function __handleCloseBtnClick__REACT_HOT_LOADER__(e) {
	      var _props = this.props,
	          onModalClose = _props.onModalClose,
	          beforeClose = _props.beforeClose;

	      beforeClose && beforeClose(e);
	      onModalClose();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          title = _props2.title,
	          hideClose = _props2.hideClose,
	          className = _props2.className,
	          children = _props2.children;


	      var closeBtn = hideClose ? null : _react2.default.createElement(
	        'button',
	        { type: 'button',
	          className: 'close', onClick: this.handleCloseBtnClick },
	        _react2.default.createElement(
	          'span',
	          { 'aria-hidden': 'true' },
	          '\xD7'
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'sr-only' },
	          'Close'
	        )
	      );

	      var content = children || _react2.default.createElement(
	        'span',
	        null,
	        closeBtn,
	        _react2.default.createElement(
	          'h4',
	          { className: 'modal-title' },
	          title
	        )
	      );

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal-header ' + className },
	        content
	      );
	    }
	  }]);

	  return InsertModalHeader;
	}(_react.Component);

	InsertModalHeader.propTypes = {
	  className: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  onModalClose: _react.PropTypes.func,
	  hideClose: _react.PropTypes.bool,
	  beforeClose: _react.PropTypes.func
	};
	InsertModalHeader.defaultProps = {
	  className: '',
	  title: 'Add Row',
	  onModalClose: undefined,
	  hideClose: false,
	  beforeClose: undefined
	};

	var _default = InsertModalHeader;
	exports.default = _default;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(InsertModalHeader, 'InsertModalHeader', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertModalHeader.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertModalHeader.js');
	}();

	;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InsertModalFooter = function (_Component) {
	  _inherits(InsertModalFooter, _Component);

	  function InsertModalFooter() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, InsertModalFooter);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertModalFooter.__proto__ || Object.getPrototypeOf(InsertModalFooter)).call.apply(_ref, [this].concat(args))), _this), _this.handleCloseBtnClick = function () {
	      var _this2;

	      return (_this2 = _this).__handleCloseBtnClick__REACT_HOT_LOADER__.apply(_this2, arguments);
	    }, _this.handleSaveBtnClick = function () {
	      var _this3;

	      return (_this3 = _this).__handleSaveBtnClick__REACT_HOT_LOADER__.apply(_this3, arguments);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(InsertModalFooter, [{
	    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
	    value: function __handleCloseBtnClick__REACT_HOT_LOADER__() {
	      return this.__handleCloseBtnClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleCloseBtnClick__REACT_HOT_LOADER__',
	    value: function __handleCloseBtnClick__REACT_HOT_LOADER__(e) {
	      var _props = this.props,
	          beforeClose = _props.beforeClose,
	          onModalClose = _props.onModalClose;

	      beforeClose && beforeClose(e);
	      onModalClose();
	    }
	  }, {
	    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
	    value: function __handleSaveBtnClick__REACT_HOT_LOADER__() {
	      return this.__handleSaveBtnClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleSaveBtnClick__REACT_HOT_LOADER__',
	    value: function __handleSaveBtnClick__REACT_HOT_LOADER__(e) {
	      var _props2 = this.props,
	          beforeSave = _props2.beforeSave,
	          onSave = _props2.onSave;

	      beforeSave && beforeSave(e);
	      onSave();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          className = _props3.className,
	          saveBtnText = _props3.saveBtnText,
	          closeBtnText = _props3.closeBtnText,
	          closeBtnContextual = _props3.closeBtnContextual,
	          saveBtnContextual = _props3.saveBtnContextual,
	          closeBtnClass = _props3.closeBtnClass,
	          saveBtnClass = _props3.saveBtnClass,
	          children = _props3.children;


	      var content = children || _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement(
	          'button',
	          {
	            type: 'button',
	            className: 'btn ' + closeBtnContextual + ' ' + closeBtnClass,
	            onClick: this.handleCloseBtnClick },
	          closeBtnText
	        ),
	        _react2.default.createElement(
	          'button',
	          {
	            type: 'button',
	            className: 'btn ' + saveBtnContextual + ' ' + saveBtnClass,
	            onClick: this.handleSaveBtnClick },
	          saveBtnText
	        )
	      );

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal-footer ' + className },
	        content
	      );
	    }
	  }]);

	  return InsertModalFooter;
	}(_react.Component);

	InsertModalFooter.propTypes = {
	  className: _react.PropTypes.string,
	  saveBtnText: _react.PropTypes.string,
	  closeBtnText: _react.PropTypes.string,
	  closeBtnContextual: _react.PropTypes.string,
	  saveBtnContextual: _react.PropTypes.string,
	  closeBtnClass: _react.PropTypes.string,
	  saveBtnClass: _react.PropTypes.string,
	  beforeClose: _react.PropTypes.func,
	  beforeSave: _react.PropTypes.func,
	  onSave: _react.PropTypes.func,
	  onModalClose: _react.PropTypes.func
	};
	InsertModalFooter.defaultProps = {
	  className: '',
	  saveBtnText: _Const2.default.SAVE_BTN_TEXT,
	  closeBtnText: _Const2.default.CLOSE_BTN_TEXT,
	  closeBtnContextual: 'btn-default',
	  saveBtnContextual: 'btn-primary',
	  closeBtnClass: '',
	  saveBtnClass: '',
	  beforeClose: undefined,
	  beforeSave: undefined
	};

	var _default = InsertModalFooter;
	exports.default = _default;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(InsertModalFooter, 'InsertModalFooter', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertModalFooter.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertModalFooter.js');
	}();

	;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Editor = __webpack_require__(161);

	var _Editor2 = _interopRequireDefault(_Editor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/display-name: 0 */


	var InsertModalBody = function (_Component) {
	  _inherits(InsertModalBody, _Component);

	  function InsertModalBody() {
	    _classCallCheck(this, InsertModalBody);

	    return _possibleConstructorReturn(this, (InsertModalBody.__proto__ || Object.getPrototypeOf(InsertModalBody)).apply(this, arguments));
	  }

	  _createClass(InsertModalBody, [{
	    key: 'getFieldValue',
	    value: function getFieldValue() {
	      var _this2 = this;

	      var newRow = {};
	      this.props.columns.forEach(function (column, i) {
	        var inputVal = void 0;
	        if (column.autoValue) {
	          // when you want same auto generate value and not allow edit, example ID field
	          var time = new Date().getTime();
	          inputVal = typeof column.autoValue === 'function' ? column.autoValue() : 'autovalue-' + time;
	        } else if (column.hiddenOnInsert || !column.field) {
	          inputVal = '';
	        } else {
	          var dom = _this2.refs[column.field + i];
	          inputVal = dom.value;

	          if (column.editable && column.editable.type === 'checkbox') {
	            var values = inputVal.split(':');
	            inputVal = dom.checked ? values[0] : values[1];
	          }
	        }
	        newRow[column.field] = inputVal;
	      }, this);
	      return newRow;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          columns = _props.columns,
	          validateState = _props.validateState,
	          ignoreEditable = _props.ignoreEditable;

	      return _react2.default.createElement(
	        'div',
	        { className: 'modal-body' },
	        columns.map(function (column, i) {
	          var editable = column.editable,
	              format = column.format,
	              field = column.field,
	              name = column.name,
	              autoValue = column.autoValue,
	              hiddenOnInsert = column.hiddenOnInsert;

	          var attr = {
	            ref: field + i,
	            placeholder: editable.placeholder ? editable.placeholder : name
	          };

	          if (autoValue || hiddenOnInsert || !column.field) {
	            // when you want same auto generate value
	            // and not allow edit, for example ID field
	            return null;
	          }
	          var error = validateState[field] ? _react2.default.createElement(
	            'span',
	            { className: 'help-block bg-danger' },
	            validateState[field]
	          ) : null;
	          return _react2.default.createElement(
	            'div',
	            { className: 'form-group', key: field },
	            _react2.default.createElement(
	              'label',
	              null,
	              name
	            ),
	            (0, _Editor2.default)(editable, attr, format, '', undefined, ignoreEditable),
	            error
	          );
	        })
	      );
	    }
	  }]);

	  return InsertModalBody;
	}(_react.Component);

	InsertModalBody.propTypes = {
	  columns: _react.PropTypes.array,
	  validateState: _react.PropTypes.object,
	  ignoreEditable: _react.PropTypes.bool
	};

	InsertModalBody.defaultProps = {
	  validateState: {},
	  ignoreEditable: false
	};

	var _default = InsertModalBody;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(InsertModalBody, 'InsertModalBody', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertModalBody.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertModalBody.js');
	}();

	;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var insertBtnDefaultClass = 'react-bs-table-add-btn';

	var InsertButton = function (_Component) {
	  _inherits(InsertButton, _Component);

	  function InsertButton() {
	    _classCallCheck(this, InsertButton);

	    return _possibleConstructorReturn(this, (InsertButton.__proto__ || Object.getPrototypeOf(InsertButton)).apply(this, arguments));
	  }

	  _createClass(InsertButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          btnContextual = _props.btnContextual,
	          className = _props.className,
	          onClick = _props.onClick,
	          btnGlyphicon = _props.btnGlyphicon,
	          btnText = _props.btnText,
	          children = _props.children,
	          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

	      var content = children || _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
	        btnText
	      );
	      return _react2.default.createElement(
	        'button',
	        _extends({ type: 'button',
	          className: 'btn ' + btnContextual + ' ' + insertBtnDefaultClass + ' ' + className,
	          onClick: onClick
	        }, rest),
	        content
	      );
	    }
	  }]);

	  return InsertButton;
	}(_react.Component);

	InsertButton.propTypes = {
	  btnText: _react.PropTypes.string,
	  btnContextual: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  btnGlyphicon: _react.PropTypes.string
	};
	InsertButton.defaultProps = {
	  btnText: _Const2.default.INSERT_BTN_TEXT,
	  btnContextual: 'btn-info',
	  className: '',
	  onClick: undefined,
	  btnGlyphicon: 'glyphicon-plus'
	};

	var _default = InsertButton;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(insertBtnDefaultClass, 'insertBtnDefaultClass', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertButton.js');

	  __REACT_HOT_LOADER__.register(InsertButton, 'InsertButton', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertButton.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/InsertButton.js');
	}();

	;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var deleteBtnDefaultClass = 'react-bs-table-del-btn';

	var DeleteButton = function (_Component) {
	  _inherits(DeleteButton, _Component);

	  function DeleteButton() {
	    _classCallCheck(this, DeleteButton);

	    return _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).apply(this, arguments));
	  }

	  _createClass(DeleteButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          btnContextual = _props.btnContextual,
	          className = _props.className,
	          onClick = _props.onClick,
	          btnGlyphicon = _props.btnGlyphicon,
	          btnText = _props.btnText,
	          children = _props.children,
	          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

	      var content = children || _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
	        ' ',
	        btnText
	      );
	      return _react2.default.createElement(
	        'button',
	        _extends({ type: 'button',
	          className: 'btn ' + btnContextual + ' ' + deleteBtnDefaultClass + ' ' + className,
	          onClick: onClick
	        }, rest),
	        content
	      );
	    }
	  }]);

	  return DeleteButton;
	}(_react.Component);

	DeleteButton.propTypes = {
	  btnText: _react.PropTypes.string,
	  btnContextual: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  btnGlyphicon: _react.PropTypes.string
	};
	DeleteButton.defaultProps = {
	  btnText: _Const2.default.DELETE_BTN_TEXT,
	  btnContextual: 'btn-warning',
	  className: '',
	  onClick: undefined,
	  btnGlyphicon: 'glyphicon-trash'
	};

	var _default = DeleteButton;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(deleteBtnDefaultClass, 'deleteBtnDefaultClass', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/DeleteButton.js');

	  __REACT_HOT_LOADER__.register(DeleteButton, 'DeleteButton', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/DeleteButton.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/DeleteButton.js');
	}();

	;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var exportCsvBtnDefaultClass = 'react-bs-table-csv-btn';

	var ExportCSVButton = function (_Component) {
	  _inherits(ExportCSVButton, _Component);

	  function ExportCSVButton() {
	    _classCallCheck(this, ExportCSVButton);

	    return _possibleConstructorReturn(this, (ExportCSVButton.__proto__ || Object.getPrototypeOf(ExportCSVButton)).apply(this, arguments));
	  }

	  _createClass(ExportCSVButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          btnContextual = _props.btnContextual,
	          className = _props.className,
	          onClick = _props.onClick,
	          btnGlyphicon = _props.btnGlyphicon,
	          btnText = _props.btnText,
	          children = _props.children,
	          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnGlyphicon', 'btnText', 'children']);

	      var content = children || _react2.default.createElement(
	        'span',
	        null,
	        _react2.default.createElement('i', { className: 'glyphicon ' + btnGlyphicon }),
	        ' ',
	        btnText
	      );
	      return _react2.default.createElement(
	        'button',
	        _extends({ type: 'button',
	          className: 'btn ' + btnContextual + ' ' + exportCsvBtnDefaultClass + ' ' + className + ' hidden-print',
	          onClick: onClick
	        }, rest),
	        content
	      );
	    }
	  }]);

	  return ExportCSVButton;
	}(_react.Component);

	ExportCSVButton.propTypes = {
	  btnText: _react.PropTypes.string,
	  btnContextual: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  onClick: _react.PropTypes.func,
	  btnGlyphicon: _react.PropTypes.string
	};
	ExportCSVButton.defaultProps = {
	  btnText: _Const2.default.EXPORT_CSV_TEXT,
	  btnContextual: 'btn-success',
	  className: '',
	  onClick: undefined,
	  btnGlyphicon: 'glyphicon-export'
	};

	var _default = ExportCSVButton;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(exportCsvBtnDefaultClass, 'exportCsvBtnDefaultClass', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ExportCSVButton.js');

	  __REACT_HOT_LOADER__.register(ExportCSVButton, 'ExportCSVButton', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ExportCSVButton.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ExportCSVButton.js');
	}();

	;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var showSelectedOnlyBtnDefaultClass = 'react-bs-table-show-sel-only-btn';

	var ShowSelectedOnlyButton = function (_Component) {
	  _inherits(ShowSelectedOnlyButton, _Component);

	  function ShowSelectedOnlyButton() {
	    _classCallCheck(this, ShowSelectedOnlyButton);

	    return _possibleConstructorReturn(this, (ShowSelectedOnlyButton.__proto__ || Object.getPrototypeOf(ShowSelectedOnlyButton)).apply(this, arguments));
	  }

	  _createClass(ShowSelectedOnlyButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          btnContextual = _props.btnContextual,
	          className = _props.className,
	          onClick = _props.onClick,
	          toggle = _props.toggle,
	          showAllText = _props.showAllText,
	          showOnlySelectText = _props.showOnlySelectText,
	          children = _props.children,
	          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'toggle', 'showAllText', 'showOnlySelectText', 'children']);

	      var content = children || _react2.default.createElement(
	        'span',
	        null,
	        toggle ? showOnlySelectText : showAllText
	      );
	      return _react2.default.createElement(
	        'button',
	        _extends({ type: 'button',
	          'aria-pressed': 'false',
	          'data-toggle': 'button',
	          className: 'btn ' + btnContextual + ' ' + showSelectedOnlyBtnDefaultClass + ' ' + className,
	          onClick: onClick
	        }, rest),
	        content
	      );
	    }
	  }]);

	  return ShowSelectedOnlyButton;
	}(_react.Component);

	ShowSelectedOnlyButton.propTypes = {
	  showAllText: _react.PropTypes.string,
	  showOnlySelectText: _react.PropTypes.string,
	  toggle: _react.PropTypes.bool,
	  btnContextual: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};
	ShowSelectedOnlyButton.defaultProps = {
	  showAllText: _Const2.default.SHOW_ALL,
	  showOnlySelectText: _Const2.default.SHOW_ONLY_SELECT,
	  toggle: false,
	  btnContextual: 'btn-primary',
	  className: '',
	  onClick: undefined
	};

	var _default = ShowSelectedOnlyButton;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(showSelectedOnlyBtnDefaultClass, 'showSelectedOnlyBtnDefaultClass', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');

	  __REACT_HOT_LOADER__.register(ShowSelectedOnlyButton, 'ShowSelectedOnlyButton', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ShowSelectedOnlyButton.js');
	}();

	;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchField = function (_Component) {
	  _inherits(SearchField, _Component);

	  function SearchField() {
	    _classCallCheck(this, SearchField);

	    return _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).apply(this, arguments));
	  }

	  _createClass(SearchField, [{
	    key: 'getValue',
	    value: function getValue() {
	      return _reactDom2.default.findDOMNode(this).value;
	    }
	  }, {
	    key: 'setValue',
	    value: function setValue(value) {
	      _reactDom2.default.findDOMNode(this).value = value;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          defaultValue = _props.defaultValue,
	          placeholder = _props.placeholder,
	          onKeyUp = _props.onKeyUp,
	          rest = _objectWithoutProperties(_props, ['className', 'defaultValue', 'placeholder', 'onKeyUp']);

	      return _react2.default.createElement('input', _extends({
	        className: 'form-control ' + className,
	        type: 'text',
	        defaultValue: defaultValue,
	        placeholder: placeholder || SearchField.defaultProps.placeholder,
	        onKeyUp: onKeyUp,
	        style: { zIndex: 0 }
	      }, rest));
	    }
	  }]);

	  return SearchField;
	}(_react.Component);

	SearchField.propTypes = {
	  className: _react.PropTypes.string,
	  defaultValue: _react.PropTypes.string,
	  placeholder: _react.PropTypes.string,
	  onKeyUp: _react.PropTypes.func
	};
	SearchField.defaultProps = {
	  className: '',
	  defaultValue: '',
	  placeholder: 'Search',
	  onKeyUp: undefined
	};

	var _default = SearchField;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(SearchField, 'SearchField', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/SearchField.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/SearchField.js');
	}();

	;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var clearBtnDefaultClass = 'react-bs-table-search-clear-btn';

	var ClearSearchButton = function (_Component) {
	  _inherits(ClearSearchButton, _Component);

	  function ClearSearchButton() {
	    _classCallCheck(this, ClearSearchButton);

	    return _possibleConstructorReturn(this, (ClearSearchButton.__proto__ || Object.getPrototypeOf(ClearSearchButton)).apply(this, arguments));
	  }

	  _createClass(ClearSearchButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          btnContextual = _props.btnContextual,
	          className = _props.className,
	          onClick = _props.onClick,
	          btnText = _props.btnText,
	          children = _props.children,
	          rest = _objectWithoutProperties(_props, ['btnContextual', 'className', 'onClick', 'btnText', 'children']);

	      var content = children || _react2.default.createElement(
	        'span',
	        null,
	        btnText
	      );
	      return _react2.default.createElement(
	        'button',
	        _extends({ ref: 'btn',
	          className: 'btn ' + btnContextual + ' ' + className + ' ' + clearBtnDefaultClass,
	          type: 'button',
	          onClick: onClick
	        }, rest),
	        content
	      );
	    }
	  }]);

	  return ClearSearchButton;
	}(_react.Component);

	ClearSearchButton.propTypes = {
	  btnContextual: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  btnText: _react.PropTypes.string,
	  onClick: _react.PropTypes.func
	};
	ClearSearchButton.defaultProps = {
	  btnContextual: 'btn-default',
	  className: '',
	  btnText: 'Clear',
	  onClick: undefined
	};

	var _default = ClearSearchButton;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(clearBtnDefaultClass, 'clearBtnDefaultClass', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ClearSearchButton.js');

	  __REACT_HOT_LOADER__.register(ClearSearchButton, 'ClearSearchButton', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ClearSearchButton.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ClearSearchButton.js');
	}();

	;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableFilter = function (_Component) {
	  _inherits(TableFilter, _Component);

	  function TableFilter(props) {
	    _classCallCheck(this, TableFilter);

	    var _this = _possibleConstructorReturn(this, (TableFilter.__proto__ || Object.getPrototypeOf(TableFilter)).call(this, props));

	    _this.handleKeyUp = function () {
	      return _this.__handleKeyUp__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.filterObj = {};
	    return _this;
	  }

	  _createClass(TableFilter, [{
	    key: '__handleKeyUp__REACT_HOT_LOADER__',
	    value: function __handleKeyUp__REACT_HOT_LOADER__() {
	      return this.__handleKeyUp__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleKeyUp__REACT_HOT_LOADER__',
	    value: function __handleKeyUp__REACT_HOT_LOADER__(e) {
	      var _e$currentTarget = e.currentTarget,
	          value = _e$currentTarget.value,
	          name = _e$currentTarget.name;

	      if (value.trim() === '') {
	        delete this.filterObj[name];
	      } else {
	        this.filterObj[name] = value;
	      }
	      this.props.onFilter(this.filterObj);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          striped = _props.striped,
	          condensed = _props.condensed,
	          rowSelectType = _props.rowSelectType,
	          columns = _props.columns;

	      var tableClasses = (0, _classnames2.default)('table', {
	        'table-striped': striped,
	        'table-condensed': condensed
	      });
	      var selectRowHeader = null;

	      if (rowSelectType === _Const2.default.ROW_SELECT_SINGLE || rowSelectType === _Const2.default.ROW_SELECT_MULTI) {
	        var style = {
	          width: 35,
	          paddingLeft: 0,
	          paddingRight: 0
	        };
	        selectRowHeader = _react2.default.createElement(
	          'th',
	          { style: style, key: -1 },
	          'Filter'
	        );
	      }

	      var filterField = columns.map(function (column) {
	        var hidden = column.hidden,
	            width = column.width,
	            name = column.name;

	        var thStyle = {
	          display: hidden ? 'none' : null,
	          width: width
	        };
	        return _react2.default.createElement(
	          'th',
	          { key: name, style: thStyle },
	          _react2.default.createElement(
	            'div',
	            { className: 'th-inner table-header-column' },
	            _react2.default.createElement('input', { size: '10', type: 'text',
	              placeholder: name, name: name, onKeyUp: this.handleKeyUp })
	          )
	        );
	      }, this);

	      return _react2.default.createElement(
	        'table',
	        { className: tableClasses, style: { marginTop: 5 } },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            { style: { borderBottomStyle: 'hidden' } },
	            selectRowHeader,
	            filterField
	          )
	        )
	      );
	    }
	  }]);

	  return TableFilter;
	}(_react.Component);

	TableFilter.propTypes = {
	  columns: _react.PropTypes.array,
	  rowSelectType: _react.PropTypes.string,
	  onFilter: _react.PropTypes.func
	};
	var _default = TableFilter;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(TableFilter, 'TableFilter', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableFilter.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableFilter.js');
	}();

	;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TableDataStore = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint no-nested-ternary: 0 */
	/* eslint guard-for-in: 0 */
	/* eslint no-console: 0 */
	/* eslint eqeqeq: 0 */
	/* eslint one-var: 0 */


	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TableDataStore = function () {
	  function TableDataStore(data) {
	    _classCallCheck(this, TableDataStore);

	    this.data = data;
	    this.colInfos = null;
	    this.filteredData = null;
	    this.isOnFilter = false;
	    this.filterObj = null;
	    this.searchText = null;
	    this.sortList = [];
	    this.pageObj = {};
	    this.selected = [];
	    this.multiColumnSearch = false;
	    this.multiColumnSort = 1;
	    this.showOnlySelected = false;
	    this.remote = false; // remote data
	  }

	  _createClass(TableDataStore, [{
	    key: 'setProps',
	    value: function setProps(props) {
	      this.keyField = props.keyField;
	      this.enablePagination = props.isPagination;
	      this.colInfos = props.colInfos;
	      this.remote = props.remote;
	      this.multiColumnSearch = props.multiColumnSearch;
	      this.multiColumnSort = props.multiColumnSort;
	    }
	  }, {
	    key: 'clean',
	    value: function clean() {
	      this.filteredData = null;
	      this.isOnFilter = false;
	      this.filterObj = null;
	      this.searchText = null;
	      this.sortList = [];
	      this.pageObj = {};
	      this.selected = [];
	    }
	  }, {
	    key: 'setData',
	    value: function setData(data) {
	      this.data = data;
	      if (this.remote) {
	        return;
	      }

	      this._refresh(true);
	    }
	  }, {
	    key: 'getColInfos',
	    value: function getColInfos() {
	      return this.colInfos;
	    }
	  }, {
	    key: 'getSortInfo',
	    value: function getSortInfo() {
	      return this.sortList;
	    }
	  }, {
	    key: 'setSortInfo',
	    value: function setSortInfo(order, sortField) {
	      if ((typeof order === 'undefined' ? 'undefined' : _typeof(order)) !== (typeof sortField === 'undefined' ? 'undefined' : _typeof(sortField))) {
	        throw new Error('The type of sort field and order should be both with String or Array');
	      }
	      if (Array.isArray(order) && Array.isArray(sortField)) {
	        if (order.length !== sortField.length) {
	          throw new Error('The length of sort fields and orders should be equivalent');
	        }
	        order = order.slice().reverse();
	        this.sortList = sortField.slice().reverse().map(function (field, i) {
	          return {
	            order: order[i],
	            sortField: field
	          };
	        });
	        this.sortList = this.sortList.slice(0, this.multiColumnSort);
	      } else {
	        var sortObj = {
	          order: order,
	          sortField: sortField
	        };

	        if (this.multiColumnSort > 1) {
	          var i = this.sortList.length - 1;
	          var sortFieldInHistory = false;

	          for (; i >= 0; i--) {
	            if (this.sortList[i].sortField === sortField) {
	              sortFieldInHistory = true;
	              break;
	            }
	          }

	          if (sortFieldInHistory) {
	            if (i > 0) {
	              this.sortList = this.sortList.slice(0, i);
	            } else {
	              this.sortList = this.sortList.slice(1);
	            }
	          }

	          this.sortList.unshift(sortObj);
	          this.sortList = this.sortList.slice(0, this.multiColumnSort);
	        } else {
	          this.sortList = [sortObj];
	        }
	      }
	    }
	  }, {
	    key: 'setSelectedRowKey',
	    value: function setSelectedRowKey(selectedRowKeys) {
	      this.selected = selectedRowKeys;
	    }
	  }, {
	    key: 'getRowByKey',
	    value: function getRowByKey(keys) {
	      var _this = this;

	      return keys.map(function (key) {
	        var result = _this.data.filter(function (d) {
	          return d[_this.keyField] === key;
	        });
	        if (result.length !== 0) return result[0];
	      });
	    }
	  }, {
	    key: 'getSelectedRowKeys',
	    value: function getSelectedRowKeys() {
	      return this.selected;
	    }
	  }, {
	    key: 'getCurrentDisplayData',
	    value: function getCurrentDisplayData() {
	      if (this.isOnFilter) return this.filteredData;else return this.data;
	    }
	  }, {
	    key: '_refresh',
	    value: function _refresh(skipSorting) {
	      if (this.isOnFilter) {
	        if (this.filterObj !== null) this.filter(this.filterObj);
	        if (this.searchText !== null) this.search(this.searchText);
	      }
	      if (!skipSorting && this.sortList.length > 0) {
	        this.sort();
	      }
	    }
	  }, {
	    key: 'ignoreNonSelected',
	    value: function ignoreNonSelected() {
	      var _this2 = this;

	      this.showOnlySelected = !this.showOnlySelected;
	      if (this.showOnlySelected) {
	        this.isOnFilter = true;
	        this.filteredData = this.data.filter(function (row) {
	          var result = _this2.selected.find(function (x) {
	            return row[_this2.keyField] === x;
	          });
	          return typeof result !== 'undefined' ? true : false;
	        });
	      } else {
	        this.isOnFilter = false;
	      }
	    }
	  }, {
	    key: 'sort',
	    value: function sort() {
	      var currentDisplayData = this.getCurrentDisplayData();

	      currentDisplayData = this._sort(currentDisplayData);

	      return this;
	    }
	  }, {
	    key: 'page',
	    value: function page(_page, sizePerPage) {
	      this.pageObj.end = _page * sizePerPage - 1;
	      this.pageObj.start = this.pageObj.end - (sizePerPage - 1);
	      return this;
	    }
	  }, {
	    key: 'drag',
	    value: function drag(dragIndex, hoverIndex) {
	      var offset = this.pageObj.start;
	      var dragRow = this.data[dragIndex + offset];

	      var newData = this.data.slice(0);
	      newData.splice(dragIndex + offset, 1);
	      newData.splice(hoverIndex + offset, 0, dragRow);

	      this.data = newData;

	      return this;
	    }
	  }, {
	    key: 'edit',
	    value: function edit(newVal, rowIndex, fieldName) {
	      var currentDisplayData = this.getCurrentDisplayData();
	      var rowKeyCache = void 0;
	      if (!this.enablePagination) {
	        currentDisplayData[rowIndex][fieldName] = newVal;
	        rowKeyCache = currentDisplayData[rowIndex][this.keyField];
	      } else {
	        currentDisplayData[this.pageObj.start + rowIndex][fieldName] = newVal;
	        rowKeyCache = currentDisplayData[this.pageObj.start + rowIndex][this.keyField];
	      }
	      if (this.isOnFilter) {
	        this.data.forEach(function (row) {
	          if (row[this.keyField] === rowKeyCache) {
	            row[fieldName] = newVal;
	          }
	        }, this);
	        if (this.filterObj !== null) this.filter(this.filterObj);
	        if (this.searchText !== null) this.search(this.searchText);
	      }
	      return this;
	    }
	  }, {
	    key: 'addAtBegin',
	    value: function addAtBegin(newObj) {
	      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
	        throw new Error(this.keyField + ' can\'t be empty value.');
	      }
	      var currentDisplayData = this.getCurrentDisplayData();
	      currentDisplayData.forEach(function (row) {
	        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
	          throw new Error(this.keyField + ' ' + newObj[this.keyField] + ' already exists');
	        }
	      }, this);
	      currentDisplayData.unshift(newObj);
	      if (this.isOnFilter) {
	        this.data.unshift(newObj);
	      }
	      this._refresh(false);
	    }
	  }, {
	    key: 'add',
	    value: function add(newObj) {
	      if (!newObj[this.keyField] || newObj[this.keyField].toString() === '') {
	        throw new Error(this.keyField + ' can\'t be empty value.');
	      }
	      var currentDisplayData = this.getCurrentDisplayData();
	      currentDisplayData.forEach(function (row) {
	        if (row[this.keyField].toString() === newObj[this.keyField].toString()) {
	          throw new Error(this.keyField + ' ' + newObj[this.keyField] + ' already exists');
	        }
	      }, this);

	      currentDisplayData.push(newObj);
	      if (this.isOnFilter) {
	        this.data.push(newObj);
	      }
	      this._refresh(false);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(rowKey) {
	      var _this3 = this;

	      var currentDisplayData = this.getCurrentDisplayData();
	      var result = currentDisplayData.filter(function (row) {
	        return rowKey.indexOf(row[_this3.keyField]) === -1;
	      });

	      if (this.isOnFilter) {
	        this.data = this.data.filter(function (row) {
	          return rowKey.indexOf(row[_this3.keyField]) === -1;
	        });
	        this.filteredData = result;
	      } else {
	        this.data = result;
	      }
	    }
	  }, {
	    key: 'filter',
	    value: function filter(filterObj) {
	      if (Object.keys(filterObj).length === 0) {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.filterObj = null;
	        if (this.searchText) this._search(this.data);
	      } else {
	        var source = this.data;
	        this.filterObj = filterObj;
	        if (this.searchText) {
	          this._search(source);
	          source = this.filteredData;
	        }
	        this._filter(source);
	      }
	    }
	  }, {
	    key: 'filterNumber',
	    value: function filterNumber(targetVal, filterVal, comparator) {
	      var valid = true;
	      switch (comparator) {
	        case '=':
	          {
	            if (targetVal != filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '>':
	          {
	            if (targetVal <= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '>=':
	          {
	            if (targetVal < filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '<':
	          {
	            if (targetVal >= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '<=':
	          {
	            if (targetVal > filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '!=':
	          {
	            if (targetVal == filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        default:
	          {
	            console.error('Number comparator provided is not supported');
	            break;
	          }
	      }
	      return valid;
	    }
	  }, {
	    key: 'filterDate',
	    value: function filterDate(targetVal, filterVal, comparator) {
	      // if (!targetVal) {
	      //   return false;
	      // }
	      // return (targetVal.getDate() === filterVal.getDate() &&
	      //     targetVal.getMonth() === filterVal.getMonth() &&
	      //     targetVal.getFullYear() === filterVal.getFullYear());

	      var valid = true;
	      switch (comparator) {
	        case '=':
	          {
	            if (targetVal != filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '>':
	          {
	            if (targetVal <= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '>=':
	          {
	            if (targetVal < filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '<':
	          {
	            if (targetVal >= filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '<=':
	          {
	            if (targetVal > filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        case '!=':
	          {
	            if (targetVal == filterVal) {
	              valid = false;
	            }
	            break;
	          }
	        default:
	          {
	            console.error('Date comparator provided is not supported');
	            break;
	          }
	      }
	      return valid;
	    }
	  }, {
	    key: 'filterRegex',
	    value: function filterRegex(targetVal, filterVal) {
	      try {
	        return new RegExp(filterVal, 'i').test(targetVal);
	      } catch (e) {
	        return true;
	      }
	    }
	  }, {
	    key: 'filterCustom',
	    value: function filterCustom(targetVal, filterVal, callbackInfo, cond) {
	      if (callbackInfo !== null && (typeof callbackInfo === 'undefined' ? 'undefined' : _typeof(callbackInfo)) === 'object') {
	        return callbackInfo.callback(targetVal, callbackInfo.callbackParameters);
	      }

	      return this.filterText(targetVal, filterVal, cond);
	    }
	  }, {
	    key: 'filterText',
	    value: function filterText(targetVal, filterVal) {
	      var cond = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Const2.default.FILTER_COND_LIKE;

	      targetVal = targetVal.toString();
	      filterVal = filterVal.toString();
	      if (cond === _Const2.default.FILTER_COND_EQ) {
	        return targetVal === filterVal;
	      } else {
	        targetVal = targetVal.toLowerCase();
	        filterVal = filterVal.toLowerCase();
	        return !(targetVal.indexOf(filterVal) === -1);
	      }
	    }

	    /* General search function
	     * It will search for the text if the input includes that text;
	     */

	  }, {
	    key: 'search',
	    value: function search(searchText) {
	      if (searchText.trim() === '') {
	        this.filteredData = null;
	        this.isOnFilter = false;
	        this.searchText = null;
	        if (this.filterObj) this._filter(this.data);
	      } else {
	        var source = this.data;
	        this.searchText = searchText;
	        if (this.filterObj) {
	          this._filter(source);
	          source = this.filteredData;
	        }
	        this._search(source);
	      }
	    }
	  }, {
	    key: '_filter',
	    value: function _filter(source) {
	      var _this4 = this;

	      var filterObj = this.filterObj;
	      this.filteredData = source.filter(function (row, r) {
	        var valid = true;
	        var filterVal = void 0;
	        for (var key in filterObj) {
	          var targetVal = row[key];
	          if (targetVal === null || targetVal === undefined) {
	            targetVal = '';
	          }

	          switch (filterObj[key].type) {
	            case _Const2.default.FILTER_TYPE.NUMBER:
	              {
	                filterVal = filterObj[key].value.number;
	                break;
	              }
	            case _Const2.default.FILTER_TYPE.CUSTOM:
	              {
	                filterVal = _typeof(filterObj[key].value) === 'object' ? undefined : typeof filterObj[key].value === 'string' ? filterObj[key].value.toLowerCase() : filterObj[key].value;
	                break;
	              }
	            case _Const2.default.FILTER_TYPE.DATE:
	              {
	                filterVal = filterObj[key].value.date;
	                break;
	              }
	            case _Const2.default.FILTER_TYPE.REGEX:
	              {
	                filterVal = filterObj[key].value;
	                break;
	              }
	            default:
	              {
	                filterVal = filterObj[key].value;
	                if (filterVal === undefined) {
	                  // Support old filter
	                  filterVal = filterObj[key];
	                }
	                break;
	              }
	          }
	          var format = void 0,
	              filterFormatted = void 0,
	              formatExtraData = void 0,
	              filterValue = void 0;
	          if (_this4.colInfos[key]) {
	            format = _this4.colInfos[key].format;
	            filterFormatted = _this4.colInfos[key].filterFormatted;
	            formatExtraData = _this4.colInfos[key].formatExtraData;
	            filterValue = _this4.colInfos[key].filterValue;
	            if (filterFormatted && format) {
	              targetVal = format(row[key], row, formatExtraData, r);
	            } else if (filterValue) {
	              targetVal = filterValue(row[key], row);
	            }
	          }

	          switch (filterObj[key].type) {
	            case _Const2.default.FILTER_TYPE.NUMBER:
	              {
	                valid = _this4.filterNumber(targetVal, filterVal, filterObj[key].value.comparator);
	                break;
	              }
	            case _Const2.default.FILTER_TYPE.DATE:
	              {
	                valid = _this4.filterDate(targetVal, filterVal, filterObj[key].value.comparator);
	                break;
	              }
	            case _Const2.default.FILTER_TYPE.REGEX:
	              {
	                valid = _this4.filterRegex(targetVal, filterVal);
	                break;
	              }
	            case _Const2.default.FILTER_TYPE.CUSTOM:
	              {
	                var cond = filterObj[key].props ? filterObj[key].props.cond : _Const2.default.FILTER_COND_LIKE;
	                valid = _this4.filterCustom(targetVal, filterVal, filterObj[key].value, cond);
	                break;
	              }
	            default:
	              {
	                if (filterObj[key].type === _Const2.default.FILTER_TYPE.SELECT && filterFormatted && filterFormatted && format) {
	                  filterVal = format(filterVal, row, formatExtraData, r);
	                }
	                var _cond = filterObj[key].props ? filterObj[key].props.cond : _Const2.default.FILTER_COND_LIKE;
	                valid = _this4.filterText(targetVal, filterVal, _cond);
	                break;
	              }
	          }
	          if (!valid) {
	            break;
	          }
	        }
	        return valid;
	      });
	      this.isOnFilter = true;
	    }
	  }, {
	    key: '_search',
	    value: function _search(source) {
	      var _this5 = this;

	      var searchTextArray = [];

	      if (this.multiColumnSearch) {
	        searchTextArray = this.searchText.split(' ');
	      } else {
	        searchTextArray.push(this.searchText);
	      }
	      this.filteredData = source.filter(function (row, r) {
	        var keys = Object.keys(row);
	        var valid = false;
	        // for loops are ugly, but performance matters here.
	        // And you cant break from a forEach.
	        // http://jsperf.com/for-vs-foreach/66
	        for (var i = 0, keysLength = keys.length; i < keysLength; i++) {
	          var key = keys[i];
	          // fixed data filter when misunderstand 0 is false
	          var filterSpecialNum = false;
	          if (!isNaN(row[key]) && parseInt(row[key], 10) === 0) {
	            filterSpecialNum = true;
	          }
	          if (_this5.colInfos[key] && (row[key] || filterSpecialNum)) {
	            var _colInfos$key = _this5.colInfos[key],
	                format = _colInfos$key.format,
	                filterFormatted = _colInfos$key.filterFormatted,
	                filterValue = _colInfos$key.filterValue,
	                formatExtraData = _colInfos$key.formatExtraData,
	                searchable = _colInfos$key.searchable;

	            var targetVal = row[key];
	            if (searchable) {
	              if (filterFormatted && format) {
	                targetVal = format(targetVal, row, formatExtraData, r);
	              } else if (filterValue) {
	                targetVal = filterValue(targetVal, row);
	              }
	              for (var j = 0, textLength = searchTextArray.length; j < textLength; j++) {
	                var filterVal = searchTextArray[j].toLowerCase();
	                if (targetVal.toString().toLowerCase().indexOf(filterVal) !== -1) {
	                  valid = true;
	                  break;
	                }
	              }
	            }
	          }
	        }
	        return valid;
	      });
	      this.isOnFilter = true;
	    }
	  }, {
	    key: '_sort',
	    value: function _sort(arr) {
	      var _this6 = this;

	      if (this.sortList.length === 0 || typeof this.sortList[0] === 'undefined') {
	        return arr;
	      }

	      arr.sort(function (a, b) {
	        var result = 0;

	        for (var i = 0; i < _this6.sortList.length; i++) {
	          var sortDetails = _this6.sortList[i];
	          var isDesc = sortDetails.order.toLowerCase() === _Const2.default.SORT_DESC;

	          var _colInfos$sortDetails = _this6.colInfos[sortDetails.sortField],
	              sortFunc = _colInfos$sortDetails.sortFunc,
	              sortFuncExtraData = _colInfos$sortDetails.sortFuncExtraData;


	          if (sortFunc) {
	            result = sortFunc(a, b, sortDetails.order, sortDetails.sortField, sortFuncExtraData);
	          } else {
	            var valueA = a[sortDetails.sortField] === null ? '' : a[sortDetails.sortField];
	            var valueB = b[sortDetails.sortField] === null ? '' : b[sortDetails.sortField];
	            if (isDesc) {
	              if (typeof valueB === 'string') {
	                result = valueB.localeCompare(valueA);
	              } else {
	                result = valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
	              }
	            } else {
	              if (typeof valueA === 'string') {
	                result = valueA.localeCompare(valueB);
	              } else {
	                result = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
	              }
	            }
	          }

	          if (result !== 0) {
	            return result;
	          }
	        }

	        return result;
	      });

	      return arr;
	    }
	  }, {
	    key: 'getDataIgnoringPagination',
	    value: function getDataIgnoringPagination() {
	      return this.getCurrentDisplayData();
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _data = this.getCurrentDisplayData();

	      if (_data.length === 0) return _data;

	      var remote = typeof this.remote === 'function' ? this.remote(_Const2.default.REMOTE)[_Const2.default.REMOTE_PAGE] : this.remote;

	      if (remote || !this.enablePagination) {
	        return _data;
	      } else {
	        var result = [];
	        for (var i = this.pageObj.start; i <= this.pageObj.end; i++) {
	          result.push(_data[i]);
	          if (i + 1 === _data.length) break;
	        }
	        return result;
	      }
	    }
	  }, {
	    key: 'getKeyField',
	    value: function getKeyField() {
	      return this.keyField;
	    }
	  }, {
	    key: 'getDataNum',
	    value: function getDataNum() {
	      return this.getCurrentDisplayData().length;
	    }
	  }, {
	    key: 'isChangedPage',
	    value: function isChangedPage() {
	      return this.pageObj.start && this.pageObj.end ? true : false;
	    }
	  }, {
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.data.length === 0 || this.data === null || this.data === undefined;
	    }
	  }, {
	    key: 'getAllRowkey',
	    value: function getAllRowkey() {
	      var _this7 = this;

	      return this.data.map(function (row) {
	        return row[_this7.keyField];
	      });
	    }
	  }]);

	  return TableDataStore;
	}();

	exports.TableDataStore = TableDataStore;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(TableDataStore, 'TableDataStore', '/Users/garettarrowood/Power/react-bootstrap-table/src/store/TableDataStore.js');
	}();

	;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(9);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (_util2.default.canUseDOM()) {
	  var filesaver = __webpack_require__(228);
	  var saveAs = filesaver.saveAs;
	} /* eslint block-scoped-var: 0 */
	/* eslint vars-on-top: 0 */
	/* eslint no-var: 0 */
	/* eslint no-unused-vars: 0 */


	function toString(data, keys) {
	  var dataString = '';
	  if (data.length === 0) return dataString;

	  var headCells = [];
	  var rowCount = 0;
	  keys.forEach(function (key) {
	    if (key.row > rowCount) {
	      rowCount = key.row;
	    }
	    // rowCount += (key.rowSpan + key.colSpan - 1);
	    for (var index = 0; index < key.colSpan; index++) {
	      headCells.push(key);
	    }
	  });

	  var _loop = function _loop(i) {
	    dataString += headCells.map(function (x) {
	      if (x.row + (x.rowSpan - 1) === i) {
	        return x.header;
	      }
	      if (x.row === i && x.rowSpan > 1) {
	        return '';
	      }
	    }).filter(function (key) {
	      return typeof key !== 'undefined';
	    }).join(',') + '\n';
	  };

	  for (var i = 0; i <= rowCount; i++) {
	    _loop(i);
	  }

	  keys = keys.filter(function (key) {
	    return key.field !== undefined;
	  });

	  data.map(function (row) {
	    keys.map(function (col, i) {
	      var field = col.field,
	          format = col.format,
	          extraData = col.extraData;

	      var value = typeof format !== 'undefined' ? format(row[field], row, extraData) : row[field];
	      var cell = typeof value !== 'undefined' ? '"' + value + '"' : '';
	      dataString += cell;
	      if (i + 1 < keys.length) dataString += ',';
	    });

	    dataString += '\n';
	  });

	  return dataString;
	}

	var exportCSV = function exportCSV(data, keys, filename) {
	  var dataString = toString(data, keys);
	  if (typeof window !== 'undefined') {
	    saveAs(new Blob([dataString], { type: 'text/plain;charset=utf-8' }), filename, true);
	  }
	};

	var _default = exportCSV;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(saveAs, 'saveAs', '/Users/garettarrowood/Power/react-bootstrap-table/src/csv_export_util.js');

	  __REACT_HOT_LOADER__.register(toString, 'toString', '/Users/garettarrowood/Power/react-bootstrap-table/src/csv_export_util.js');

	  __REACT_HOT_LOADER__.register(exportCSV, 'exportCSV', '/Users/garettarrowood/Power/react-bootstrap-table/src/csv_export_util.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/csv_export_util.js');
	}();

	;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/* FileSaver.js
	 * A saveAs() FileSaver implementation.
	 * 1.1.20151003
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: MIT
	 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
	 */

	/*global self */
	/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

	/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

	var saveAs = saveAs || function (view) {
		"use strict";
		// IE <10 is explicitly unsupported

		if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
			return;
		}
		var doc = view.document
		// only get URL when necessary in case Blob.js hasn't overridden it yet
		,
		    get_URL = function get_URL() {
			return view.URL || view.webkitURL || view;
		},
		    save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
		    can_use_save_link = "download" in save_link,
		    click = function click(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		},
		    is_safari = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
		    webkit_req_fs = view.webkitRequestFileSystem,
		    req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem,
		    throw_outside = function throw_outside(ex) {
			(view.setImmediate || view.setTimeout)(function () {
				throw ex;
			}, 0);
		},
		    force_saveable_type = "application/octet-stream",
		    fs_min_size = 0
		// See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
		// https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
		// for the reasoning behind the timeout and revocation flow
		,
		    arbitrary_revoke_timeout = 500 // in ms
		,
		    revoke = function revoke(file) {
			var revoker = function revoker() {
				if (typeof file === "string") {
					// file is an object URL
					get_URL().revokeObjectURL(file);
				} else {
					// file is a File
					file.remove();
				}
			};
			if (view.chrome) {
				revoker();
			} else {
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
		},
		    dispatch = function dispatch(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		},
		    auto_bom = function auto_bom(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob(["\uFEFF", blob], { type: blob.type });
			}
			return blob;
		},
		    FileSaver = function FileSaver(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var filesaver = this,
			    type = blob.type,
			    blob_changed = false,
			    object_url,
			    target_view,
			    dispatch_all = function dispatch_all() {
				dispatch(filesaver, "writestart progress write writeend".split(" "));
			}
			// on any filesys errors revert to saving with object URLs
			,
			    fs_error = function fs_error() {
				if (target_view && is_safari && typeof FileReader !== "undefined") {
					// Safari doesn't allow downloading of blob urls
					var reader = new FileReader();
					reader.onloadend = function () {
						var base64Data = reader.result;
						target_view.location.href = "data:attachment/file" + base64Data.slice(base64Data.search(/[,;]/));
						filesaver.readyState = filesaver.DONE;
						dispatch_all();
					};
					reader.readAsDataURL(blob);
					filesaver.readyState = filesaver.INIT;
					return;
				}
				// don't create more object URLs than needed
				if (blob_changed || !object_url) {
					object_url = get_URL().createObjectURL(blob);
				}
				if (target_view) {
					target_view.location.href = object_url;
				} else {
					var new_tab = view.open(object_url, "_blank");
					if (new_tab == undefined && is_safari) {
						//Apple do not allow window.open, see http://bit.ly/1kZffRI
						view.location.href = object_url;
					}
				}
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				revoke(object_url);
			},
			    abortable = function abortable(func) {
				return function () {
					if (filesaver.readyState !== filesaver.DONE) {
						return func.apply(this, arguments);
					}
				};
			},
			    create_if_not_found = { create: true, exclusive: false },
			    slice;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				save_link.href = object_url;
				save_link.download = name;
				setTimeout(function () {
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			// Update: Google errantly closed 91158, I submitted it again:
			// https://code.google.com/p/chromium/issues/detail?id=389642
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function (dir) {
					var save = function save() {
						dir.getFile(name, create_if_not_found, abortable(function (file) {
							file.createWriter(abortable(function (writer) {
								writer.onwriteend = function (event) {
									target_view.location.href = file.toURL();
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
									revoke(file);
								};
								writer.onerror = function () {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function (event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function () {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, { create: false }, abortable(function (file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function (ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		},
		    FS_proto = FileSaver.prototype,
		    saveAs = function saveAs(blob, name, no_auto_bom) {
			return new FileSaver(blob, name, no_auto_bom);
		};
		// IE 10+ (native saveAs)
		if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
			return function (blob, name, no_auto_bom) {
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				return navigator.msSaveOrOpenBlob(blob, name || "download");
			};
		}

		FS_proto.abort = function () {
			var filesaver = this;
			filesaver.readyState = filesaver.DONE;
			dispatch(filesaver, "abort");
		};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;

		FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;

		return saveAs;
	}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || undefined.content);
	// `self` is undefined in Firefox for Android content script context
	// while `this` is nsIContentFrameMessageManager
	// with an attribute `content` that corresponds to the window

	if (typeof module !== "undefined" && module.exports) {
		module.exports.saveAs = saveAs;
	} else if ("function" !== "undefined" && __webpack_require__(229) !== null && __webpack_require__(230) != null) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return saveAs;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	;

	var _temp = function () {
		if (typeof __REACT_HOT_LOADER__ === 'undefined') {
			return;
		}

		__REACT_HOT_LOADER__.register(saveAs, "saveAs", "/Users/garettarrowood/Power/react-bootstrap-table/src/filesaver.js");
	}();

	;

/***/ }),
/* 229 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 230 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Filter = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _events = __webpack_require__(232);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Filter = exports.Filter = function (_EventEmitter) {
	  _inherits(Filter, _EventEmitter);

	  function Filter(data) {
	    _classCallCheck(this, Filter);

	    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, data));

	    _this.currentFilter = {};
	    return _this;
	  }

	  _createClass(Filter, [{
	    key: 'handleFilter',
	    value: function handleFilter(dataField, value, type, filterObj) {
	      var filterType = type || _Const2.default.FILTER_TYPE.CUSTOM;

	      var props = {
	        cond: filterObj.condition // Only for select and text filter
	      };

	      if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	        // value of the filter is an object
	        var hasValue = true;
	        for (var prop in value) {
	          if (!value[prop] || value[prop] === '') {
	            hasValue = false;
	            break;
	          }
	        }
	        // if one of the object properties is undefined or empty, we remove the filter
	        if (hasValue) {
	          this.currentFilter[dataField] = { value: value, type: filterType, props: props };
	        } else {
	          delete this.currentFilter[dataField];
	        }
	      } else if (!value || value.trim() === '') {
	        delete this.currentFilter[dataField];
	      } else {
	        this.currentFilter[dataField] = { value: value.trim(), type: filterType, props: props };
	      }
	      this.emit('onFilterChange', this.currentFilter);
	    }
	  }]);

	  return Filter;
	}(_events.EventEmitter);

	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Filter, 'Filter', '/Users/garettarrowood/Power/react-bootstrap-table/src/Filter.js');
	}();

	;

/***/ }),
/* 232 */
/***/ (function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	var _util = __webpack_require__(9);

	var _util2 = _interopRequireDefault(_util);

	var _Date = __webpack_require__(234);

	var _Date2 = _interopRequireDefault(_Date);

	var _Text = __webpack_require__(235);

	var _Text2 = _interopRequireDefault(_Text);

	var _Regex = __webpack_require__(236);

	var _Regex2 = _interopRequireDefault(_Regex);

	var _Select = __webpack_require__(237);

	var _Select2 = _interopRequireDefault(_Select);

	var _Number = __webpack_require__(238);

	var _Number2 = _interopRequireDefault(_Number);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint default-case: 0 */
	/* eslint guard-for-in: 0 */


	var TableHeaderColumn = function (_Component) {
	  _inherits(TableHeaderColumn, _Component);

	  function TableHeaderColumn(props) {
	    _classCallCheck(this, TableHeaderColumn);

	    var _this = _possibleConstructorReturn(this, (TableHeaderColumn.__proto__ || Object.getPrototypeOf(TableHeaderColumn)).call(this, props));

	    _this.handleColumnClick = function () {
	      return _this.__handleColumnClick__REACT_HOT_LOADER__.apply(_this, arguments);
	    };

	    _this.handleFilter = _this.handleFilter.bind(_this);
	    return _this;
	  }

	  _createClass(TableHeaderColumn, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.reset) {
	        this.cleanFiltered();
	      }
	    }
	  }, {
	    key: '__handleColumnClick__REACT_HOT_LOADER__',
	    value: function __handleColumnClick__REACT_HOT_LOADER__() {
	      return this.__handleColumnClick__REACT_HOT_LOADER__.apply(this, arguments);
	    }
	  }, {
	    key: '__handleColumnClick__REACT_HOT_LOADER__',
	    value: function __handleColumnClick__REACT_HOT_LOADER__() {
	      if (this.props.isOnlyHead || !this.props.dataSort) return;
	      var order = this.props.sort === _Const2.default.SORT_DESC ? _Const2.default.SORT_ASC : _Const2.default.SORT_DESC;
	      this.props.onSort(order, this.props.dataField);
	    }
	  }, {
	    key: 'handleFilter',
	    value: function handleFilter(value, type) {
	      var filter = this.props.filter;

	      filter.emitter.handleFilter(this.props.dataField, value, type, filter);
	    }
	  }, {
	    key: 'getFilters',
	    value: function getFilters() {
	      var _props = this.props,
	          headerText = _props.headerText,
	          children = _props.children;

	      switch (this.props.filter.type) {
	        case _Const2.default.FILTER_TYPE.TEXT:
	          {
	            return _react2.default.createElement(_Text2.default, _extends({ ref: 'textFilter' }, this.props.filter, {
	              columnName: headerText || children, filterHandler: this.handleFilter }));
	          }
	        case _Const2.default.FILTER_TYPE.REGEX:
	          {
	            return _react2.default.createElement(_Regex2.default, _extends({ ref: 'regexFilter' }, this.props.filter, {
	              columnName: headerText || children, filterHandler: this.handleFilter }));
	          }
	        case _Const2.default.FILTER_TYPE.SELECT:
	          {
	            return _react2.default.createElement(_Select2.default, _extends({ ref: 'selectFilter' }, this.props.filter, {
	              columnName: headerText || children, filterHandler: this.handleFilter }));
	          }
	        case _Const2.default.FILTER_TYPE.NUMBER:
	          {
	            return _react2.default.createElement(_Number2.default, _extends({ ref: 'numberFilter' }, this.props.filter, {
	              columnName: headerText || children, filterHandler: this.handleFilter }));
	          }
	        case _Const2.default.FILTER_TYPE.DATE:
	          {
	            return _react2.default.createElement(_Date2.default, _extends({ ref: 'dateFilter' }, this.props.filter, {
	              columnName: headerText || children, filterHandler: this.handleFilter }));
	          }
	        case _Const2.default.FILTER_TYPE.CUSTOM:
	          {
	            var elm = this.props.filter.getElement(this.handleFilter, this.props.filter.customFilterParameters);

	            return _react2.default.cloneElement(elm, { ref: 'customFilter' });
	          }
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.refs['header-col'].setAttribute('data-field', this.props.dataField);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var defaultCaret = void 0;
	      var sortCaret = void 0;
	      var _props2 = this.props,
	          headerText = _props2.headerText,
	          dataAlign = _props2.dataAlign,
	          dataField = _props2.dataField,
	          headerAlign = _props2.headerAlign,
	          headerTitle = _props2.headerTitle,
	          hidden = _props2.hidden,
	          sort = _props2.sort,
	          dataSort = _props2.dataSort,
	          sortIndicator = _props2.sortIndicator,
	          children = _props2.children,
	          caretRender = _props2.caretRender,
	          className = _props2.className,
	          isOnlyHead = _props2.isOnlyHead,
	          style = _props2.thStyle;

	      var thStyle = _extends({
	        textAlign: headerAlign || dataAlign,
	        display: hidden ? 'none' : null
	      }, style);
	      if (!isOnlyHead) {
	        if (sortIndicator) {
	          defaultCaret = !dataSort ? null : _react2.default.createElement(
	            'span',
	            { className: 'order' },
	            _react2.default.createElement(
	              'span',
	              { className: 'dropdown' },
	              _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 0 10px 5px', color: '#ccc' } })
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'dropup' },
	              _react2.default.createElement('span', { className: 'caret', style: { margin: '10px 0', color: '#ccc' } })
	            )
	          );
	        }
	        sortCaret = sort ? _util2.default.renderReactSortCaret(sort) : defaultCaret;
	        if (caretRender) {
	          sortCaret = caretRender(sort, dataField);
	        }
	      }

	      var classes = (0, _classnames2.default)(typeof className === 'function' ? className() : className, !isOnlyHead && dataSort ? 'sort-column' : '');

	      var title = {
	        title: headerTitle && typeof children === 'string' ? children : headerText
	      };
	      return _react2.default.createElement(
	        'th',
	        _extends({ ref: 'header-col',
	          className: classes,
	          style: thStyle,
	          onClick: this.handleColumnClick,
	          rowSpan: this.props.rowSpan,
	          colSpan: this.props.colSpan,
	          'data-is-only-head': this.props.isOnlyHead
	        }, title),
	        children,
	        sortCaret,
	        _react2.default.createElement(
	          'div',
	          { onClick: function onClick(e) {
	              return e.stopPropagation();
	            } },
	          this.props.filter && !isOnlyHead ? this.getFilters() : null
	        )
	      );
	    }
	  }, {
	    key: 'cleanFiltered',
	    value: function cleanFiltered() {
	      if (this.props.filter === undefined) {
	        return;
	      }

	      switch (this.props.filter.type) {
	        case _Const2.default.FILTER_TYPE.TEXT:
	          {
	            this.refs.textFilter.cleanFiltered();
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.REGEX:
	          {
	            this.refs.regexFilter.cleanFiltered();
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.SELECT:
	          {
	            this.refs.selectFilter.cleanFiltered();
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.NUMBER:
	          {
	            this.refs.numberFilter.cleanFiltered();
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.DATE:
	          {
	            this.refs.dateFilter.cleanFiltered();
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.CUSTOM:
	          {
	            this.refs.customFilter.cleanFiltered();
	            break;
	          }
	      }
	    }
	  }, {
	    key: 'applyFilter',
	    value: function applyFilter(val) {
	      if (this.props.filter === undefined) return;
	      switch (this.props.filter.type) {
	        case _Const2.default.FILTER_TYPE.TEXT:
	          {
	            this.refs.textFilter.applyFilter(val);
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.REGEX:
	          {
	            this.refs.regexFilter.applyFilter(val);
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.SELECT:
	          {
	            this.refs.selectFilter.applyFilter(val);
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.NUMBER:
	          {
	            this.refs.numberFilter.applyFilter(val);
	            break;
	          }
	        case _Const2.default.FILTER_TYPE.DATE:
	          {
	            this.refs.dateFilter.applyFilter(val);
	            break;
	          }
	      }
	    }
	  }]);

	  return TableHeaderColumn;
	}(_react.Component);

	var filterTypeArray = [];
	for (var key in _Const2.default.FILTER_TYPE) {
	  filterTypeArray.push(_Const2.default.FILTER_TYPE[key]);
	}

	TableHeaderColumn.propTypes = {
	  dataField: _react.PropTypes.string,
	  dataAlign: _react.PropTypes.string,
	  headerAlign: _react.PropTypes.string,
	  headerTitle: _react.PropTypes.bool,
	  headerText: _react.PropTypes.string,
	  dataSort: _react.PropTypes.bool,
	  onSort: _react.PropTypes.func,
	  dataFormat: _react.PropTypes.func,
	  csvFormat: _react.PropTypes.func,
	  csvHeader: _react.PropTypes.string,
	  isKey: _react.PropTypes.bool,
	  editable: _react.PropTypes.any,
	  hidden: _react.PropTypes.bool,
	  hiddenOnInsert: _react.PropTypes.bool,
	  searchable: _react.PropTypes.bool,
	  className: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	  width: _react.PropTypes.string,
	  sortFunc: _react.PropTypes.func,
	  sortFuncExtraData: _react.PropTypes.any,
	  columnClassName: _react.PropTypes.any,
	  editColumnClassName: _react.PropTypes.any,
	  invalidEditColumnClassName: _react.PropTypes.any,
	  columnTitle: _react.PropTypes.bool,
	  filterFormatted: _react.PropTypes.bool,
	  filterValue: _react.PropTypes.func,
	  sort: _react.PropTypes.string,
	  caretRender: _react.PropTypes.func,
	  formatExtraData: _react.PropTypes.any,
	  csvFormatExtraData: _react.PropTypes.any,
	  filter: _react.PropTypes.shape({
	    type: _react.PropTypes.oneOf(filterTypeArray),
	    delay: _react.PropTypes.number,
	    options: _react.PropTypes.oneOfType([_react.PropTypes.object, // for SelectFilter
	    _react.PropTypes.arrayOf(_react.PropTypes.number) // for NumberFilter
	    ]),
	    numberComparators: _react.PropTypes.arrayOf(_react.PropTypes.string),
	    emitter: _react.PropTypes.object,
	    placeholder: _react.PropTypes.string,
	    getElement: _react.PropTypes.func,
	    customFilterParameters: _react.PropTypes.object,
	    condition: _react.PropTypes.oneOf([_Const2.default.FILTER_COND_EQ, _Const2.default.FILTER_COND_LIKE])
	  }),
	  sortIndicator: _react.PropTypes.bool,
	  export: _react.PropTypes.bool,
	  expandable: _react.PropTypes.bool,
	  tdAttr: _react.PropTypes.object,
	  tdStyle: _react.PropTypes.object,
	  thStyle: _react.PropTypes.object,
	  dragHandle: _react.PropTypes.bool
	};

	TableHeaderColumn.defaultProps = {
	  dataAlign: 'left',
	  headerAlign: undefined,
	  headerTitle: true,
	  dataSort: false,
	  dataFormat: undefined,
	  csvFormat: undefined,
	  csvHeader: undefined,
	  isKey: false,
	  editable: true,
	  onSort: undefined,
	  hidden: false,
	  hiddenOnInsert: false,
	  searchable: true,
	  className: '',
	  columnTitle: false,
	  width: null,
	  sortFunc: undefined,
	  columnClassName: '',
	  editColumnClassName: '',
	  invalidEditColumnClassName: '',
	  filterFormatted: false,
	  filterValue: undefined,
	  sort: undefined,
	  formatExtraData: undefined,
	  sortFuncExtraData: undefined,
	  filter: undefined,
	  sortIndicator: true,
	  expandable: true,
	  tdAttr: undefined,
	  tdStyle: undefined,
	  thStyle: undefined,
	  dragHandle: false
	};

	var _default = TableHeaderColumn;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(TableHeaderColumn, 'TableHeaderColumn', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableHeaderColumn.js');

	  __REACT_HOT_LOADER__.register(filterTypeArray, 'filterTypeArray', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableHeaderColumn.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/TableHeaderColumn.js');
	}();

	;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint quotes: 0 */
	/* eslint max-len: 0 */


	var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

	function dateParser(d) {
	  return d.getFullYear() + '-' + ("0" + (d.getMonth() + 1)).slice(-2) + '-' + ("0" + d.getDate()).slice(-2);
	}

	var DateFilter = function (_Component) {
	  _inherits(DateFilter, _Component);

	  function DateFilter(props) {
	    _classCallCheck(this, DateFilter);

	    var _this = _possibleConstructorReturn(this, (DateFilter.__proto__ || Object.getPrototypeOf(DateFilter)).call(this, props));

	    _this.dateComparators = _this.props.dateComparators || legalComparators;
	    _this.filter = _this.filter.bind(_this);
	    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
	    return _this;
	  }

	  _createClass(DateFilter, [{
	    key: 'setDefaultDate',
	    value: function setDefaultDate() {
	      var defaultDate = '';
	      var defaultValue = this.props.defaultValue;

	      if (defaultValue && defaultValue.date) {
	        // Set the appropriate format for the input type=date, i.e. "YYYY-MM-DD"
	        defaultDate = dateParser(new Date(defaultValue.date));
	      }
	      return defaultDate;
	    }
	  }, {
	    key: 'onChangeComparator',
	    value: function onChangeComparator(event) {
	      var date = this.refs.inputDate.value;
	      var comparator = event.target.value;
	      if (date === '') {
	        return;
	      }
	      date = new Date(date);
	      this.props.filterHandler({ date: date, comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
	    }
	  }, {
	    key: 'getComparatorOptions',
	    value: function getComparatorOptions() {
	      var optionTags = [];
	      optionTags.push(_react2.default.createElement('option', { key: '-1' }));
	      for (var i = 0; i < this.dateComparators.length; i++) {
	        optionTags.push(_react2.default.createElement(
	          'option',
	          { key: i, value: this.dateComparators[i] },
	          this.dateComparators[i]
	        ));
	      }
	      return optionTags;
	    }
	  }, {
	    key: 'filter',
	    value: function filter(event) {
	      var comparator = this.refs.dateFilterComparator.value;
	      var dateValue = event.target.value;
	      if (dateValue) {
	        this.props.filterHandler({ date: new Date(dateValue), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
	      } else {
	        this.props.filterHandler(null, _Const2.default.FILTER_TYPE.DATE);
	      }
	    }
	  }, {
	    key: 'cleanFiltered',
	    value: function cleanFiltered() {
	      var value = this.setDefaultDate();
	      var comparator = this.props.defaultValue ? this.props.defaultValue.comparator : '';
	      this.setState({ isPlaceholderSelected: value === '' });
	      this.refs.dateFilterComparator.value = comparator;
	      this.refs.inputDate.value = value;
	      this.props.filterHandler({ date: new Date(value), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
	    }
	  }, {
	    key: 'applyFilter',
	    value: function applyFilter(filterDateObj) {
	      var date = filterDateObj.date,
	          comparator = filterDateObj.comparator;

	      this.setState({ isPlaceholderSelected: date === '' });
	      this.refs.dateFilterComparator.value = comparator;
	      this.refs.inputDate.value = dateParser(date);
	      this.props.filterHandler({ date: date, comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var comparator = this.refs.dateFilterComparator.value;
	      var dateValue = this.refs.inputDate.value;
	      if (comparator && dateValue) {
	        this.props.filterHandler({ date: new Date(dateValue), comparator: comparator }, _Const2.default.FILTER_TYPE.DATE);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var defaultValue = this.props.defaultValue;

	      return _react2.default.createElement(
	        'div',
	        { className: 'filter date-filter' },
	        _react2.default.createElement(
	          'select',
	          { ref: 'dateFilterComparator',
	            className: 'date-filter-comparator form-control',
	            onChange: this.onChangeComparator,
	            defaultValue: defaultValue ? defaultValue.comparator : '' },
	          this.getComparatorOptions()
	        ),
	        _react2.default.createElement('input', { ref: 'inputDate',
	          className: 'filter date-filter-input form-control',
	          type: 'date',
	          onChange: this.filter,
	          defaultValue: this.setDefaultDate() })
	      );
	    }
	  }]);

	  return DateFilter;
	}(_react.Component);

	DateFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  defaultValue: _react.PropTypes.shape({
	    date: _react.PropTypes.object,
	    comparator: _react.PropTypes.oneOf(legalComparators)
	  }),
	  /* eslint consistent-return: 0 */
	  dateComparators: function dateComparators(props, propName) {
	    if (!props[propName]) {
	      return;
	    }
	    for (var i = 0; i < props[propName].length; i++) {
	      var comparatorIsValid = false;
	      for (var j = 0; j < legalComparators.length; j++) {
	        if (legalComparators[j] === props[propName][i]) {
	          comparatorIsValid = true;
	          break;
	        }
	      }
	      if (!comparatorIsValid) {
	        return new Error('Date comparator provided is not supported.\n          Use only ' + legalComparators);
	      }
	    }
	  },
	  columnName: _react.PropTypes.string
	};

	var _default = DateFilter;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(legalComparators, 'legalComparators', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Date.js');

	  __REACT_HOT_LOADER__.register(dateParser, 'dateParser', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Date.js');

	  __REACT_HOT_LOADER__.register(DateFilter, 'DateFilter', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Date.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Date.js');
	}();

	;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextFilter = function (_Component) {
	  _inherits(TextFilter, _Component);

	  function TextFilter(props) {
	    _classCallCheck(this, TextFilter);

	    var _this = _possibleConstructorReturn(this, (TextFilter.__proto__ || Object.getPrototypeOf(TextFilter)).call(this, props));

	    _this.filter = _this.filter.bind(_this);
	    _this.timeout = null;
	    return _this;
	  }

	  _createClass(TextFilter, [{
	    key: 'filter',
	    value: function filter(event) {
	      var _this2 = this;

	      if (this.timeout) {
	        clearTimeout(this.timeout);
	      }
	      var filterValue = event.target.value;
	      this.timeout = setTimeout(function () {
	        _this2.props.filterHandler(filterValue, _Const2.default.FILTER_TYPE.TEXT);
	      }, this.props.delay);
	    }
	  }, {
	    key: 'cleanFiltered',
	    value: function cleanFiltered() {
	      var value = this.props.defaultValue ? this.props.defaultValue : '';
	      this.refs.inputText.value = value;
	      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.TEXT);
	    }
	  }, {
	    key: 'applyFilter',
	    value: function applyFilter(filterText) {
	      this.refs.inputText.value = filterText;
	      this.props.filterHandler(filterText, _Const2.default.FILTER_TYPE.TEXT);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var defaultValue = this.refs.inputText.value;
	      if (defaultValue) {
	        this.props.filterHandler(defaultValue, _Const2.default.FILTER_TYPE.TEXT);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          placeholder = _props.placeholder,
	          columnName = _props.columnName,
	          defaultValue = _props.defaultValue;

	      return _react2.default.createElement('input', { ref: 'inputText',
	        className: 'filter text-filter form-control',
	        type: 'text',
	        onChange: this.filter,
	        placeholder: placeholder || 'Enter ' + columnName + '...',
	        defaultValue: defaultValue ? defaultValue : '' });
	    }
	  }]);

	  return TextFilter;
	}(_react.Component);

	TextFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  defaultValue: _react.PropTypes.string,
	  delay: _react.PropTypes.number,
	  placeholder: _react.PropTypes.string,
	  columnName: _react.PropTypes.string
	};

	TextFilter.defaultProps = {
	  delay: _Const2.default.FILTER_DELAY
	};

	var _default = TextFilter;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(TextFilter, 'TextFilter', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Text.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Text.js');
	}();

	;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RegexFilter = function (_Component) {
	  _inherits(RegexFilter, _Component);

	  function RegexFilter(props) {
	    _classCallCheck(this, RegexFilter);

	    var _this = _possibleConstructorReturn(this, (RegexFilter.__proto__ || Object.getPrototypeOf(RegexFilter)).call(this, props));

	    _this.filter = _this.filter.bind(_this);
	    _this.timeout = null;
	    return _this;
	  }

	  _createClass(RegexFilter, [{
	    key: 'filter',
	    value: function filter(event) {
	      var _this2 = this;

	      if (this.timeout) {
	        clearTimeout(this.timeout);
	      }
	      var filterValue = event.target.value;
	      this.timeout = setTimeout(function () {
	        _this2.props.filterHandler(filterValue, _Const2.default.FILTER_TYPE.REGEX);
	      }, this.props.delay);
	    }
	  }, {
	    key: 'cleanFiltered',
	    value: function cleanFiltered() {
	      var value = this.props.defaultValue ? this.props.defaultValue : '';
	      this.refs.inputText.value = value;
	      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.TEXT);
	    }
	  }, {
	    key: 'applyFilter',
	    value: function applyFilter(filterRegx) {
	      this.refs.inputText.value = filterRegx;
	      this.props.filterHandler(filterRegx, _Const2.default.FILTER_TYPE.REGEX);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var value = this.refs.inputText.value;
	      if (value) {
	        this.props.filterHandler(value, _Const2.default.FILTER_TYPE.REGEX);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          defaultValue = _props.defaultValue,
	          placeholder = _props.placeholder,
	          columnName = _props.columnName;

	      return _react2.default.createElement('input', { ref: 'inputText',
	        className: 'filter text-filter form-control',
	        type: 'text',
	        onChange: this.filter,
	        placeholder: placeholder || 'Enter Regex for ' + columnName + '...',
	        defaultValue: defaultValue ? defaultValue : '' });
	    }
	  }]);

	  return RegexFilter;
	}(_react.Component);

	RegexFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  defaultValue: _react.PropTypes.string,
	  delay: _react.PropTypes.number,
	  placeholder: _react.PropTypes.string,
	  columnName: _react.PropTypes.string
	};

	RegexFilter.defaultProps = {
	  delay: _Const2.default.FILTER_DELAY
	};

	var _default = RegexFilter;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(RegexFilter, 'RegexFilter', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Regex.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Regex.js');
	}();

	;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SelectFilter = function (_Component) {
	  _inherits(SelectFilter, _Component);

	  function SelectFilter(props) {
	    _classCallCheck(this, SelectFilter);

	    var _this = _possibleConstructorReturn(this, (SelectFilter.__proto__ || Object.getPrototypeOf(SelectFilter)).call(this, props));

	    _this.filter = _this.filter.bind(_this);
	    _this.state = {
	      isPlaceholderSelected: _this.props.defaultValue === undefined || !_this.props.options.hasOwnProperty(_this.props.defaultValue)
	    };
	    return _this;
	  }

	  _createClass(SelectFilter, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var isPlaceholderSelected = nextProps.defaultValue === undefined || !nextProps.options.hasOwnProperty(nextProps.defaultValue);
	      this.setState({
	        isPlaceholderSelected: isPlaceholderSelected
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var needFilter = false;
	      if (this.props.defaultValue !== prevProps.defaultValue) {
	        needFilter = true;
	      } else if (this.props.options !== prevProps.options) {
	        needFilter = true;
	      }
	      if (needFilter) {
	        var value = this.refs.selectInput.value;
	        if (value) {
	          this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
	        }
	      }
	    }
	  }, {
	    key: 'filter',
	    value: function filter(event) {
	      var value = event.target.value;

	      this.setState({ isPlaceholderSelected: value === '' });
	      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
	    }
	  }, {
	    key: 'cleanFiltered',
	    value: function cleanFiltered() {
	      var value = this.props.defaultValue !== undefined ? this.props.defaultValue : '';
	      this.setState({ isPlaceholderSelected: value === '' });
	      this.refs.selectInput.value = value;
	      this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
	    }
	  }, {
	    key: 'applyFilter',
	    value: function applyFilter(filterOption) {
	      filterOption = filterOption + '';
	      this.setState({ isPlaceholderSelected: filterOption === '' });
	      this.refs.selectInput.value = filterOption;
	      this.props.filterHandler(filterOption, _Const2.default.FILTER_TYPE.SELECT);
	    }
	  }, {
	    key: 'getOptions',
	    value: function getOptions() {
	      var optionTags = [];
	      var _props = this.props,
	          options = _props.options,
	          placeholder = _props.placeholder,
	          columnName = _props.columnName,
	          selectText = _props.selectText;

	      var selectTextValue = selectText !== undefined ? selectText : 'Select';
	      optionTags.push(_react2.default.createElement(
	        'option',
	        { key: '-1', value: '' },
	        placeholder || selectTextValue + ' ' + columnName + '...'
	      ));
	      Object.keys(options).map(function (key) {
	        optionTags.push(_react2.default.createElement(
	          'option',
	          { key: key, value: key },
	          options[key] + ''
	        ));
	      });
	      return optionTags;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var value = this.refs.selectInput.value;
	      if (value) {
	        this.props.filterHandler(value, _Const2.default.FILTER_TYPE.SELECT);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selectClass = (0, _classnames2.default)('filter', 'select-filter', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

	      return _react2.default.createElement(
	        'select',
	        { ref: 'selectInput',
	          className: selectClass,
	          onChange: this.filter,
	          defaultValue: this.props.defaultValue !== undefined ? this.props.defaultValue : '' },
	        this.getOptions()
	      );
	    }
	  }]);

	  return SelectFilter;
	}(_react.Component);

	SelectFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  options: _react.PropTypes.object.isRequired,
	  placeholder: _react.PropTypes.string,
	  columnName: _react.PropTypes.string
	};

	var _default = SelectFilter;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(SelectFilter, 'SelectFilter', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Select.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Select.js');
	}();

	;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Const = __webpack_require__(4);

	var _Const2 = _interopRequireDefault(_Const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var legalComparators = ['=', '>', '>=', '<', '<=', '!='];

	var NumberFilter = function (_Component) {
	  _inherits(NumberFilter, _Component);

	  function NumberFilter(props) {
	    _classCallCheck(this, NumberFilter);

	    var _this = _possibleConstructorReturn(this, (NumberFilter.__proto__ || Object.getPrototypeOf(NumberFilter)).call(this, props));

	    _this.numberComparators = _this.props.numberComparators || legalComparators;
	    _this.timeout = null;
	    _this.state = {
	      isPlaceholderSelected: _this.props.defaultValue === undefined || _this.props.defaultValue.number === undefined || _this.props.options && _this.props.options.indexOf(_this.props.defaultValue.number) === -1
	    };
	    _this.onChangeNumber = _this.onChangeNumber.bind(_this);
	    _this.onChangeNumberSet = _this.onChangeNumberSet.bind(_this);
	    _this.onChangeComparator = _this.onChangeComparator.bind(_this);
	    return _this;
	  }

	  _createClass(NumberFilter, [{
	    key: 'onChangeNumber',
	    value: function onChangeNumber(event) {
	      var _this2 = this;

	      var comparator = this.refs.numberFilterComparator.value;
	      if (comparator === '') {
	        return;
	      }
	      if (this.timeout) {
	        clearTimeout(this.timeout);
	      }
	      var filterValue = event.target.value;
	      this.timeout = setTimeout(function () {
	        _this2.props.filterHandler({ number: filterValue, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
	      }, this.props.delay);
	    }
	  }, {
	    key: 'onChangeNumberSet',
	    value: function onChangeNumberSet(event) {
	      var comparator = this.refs.numberFilterComparator.value;
	      var value = event.target.value;

	      this.setState({ isPlaceholderSelected: value === '' });
	      if (comparator === '') {
	        return;
	      }
	      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
	    }
	  }, {
	    key: 'onChangeComparator',
	    value: function onChangeComparator(event) {
	      var value = this.refs.numberFilter.value;
	      var comparator = event.target.value;
	      if (value === '') {
	        return;
	      }
	      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
	    }
	  }, {
	    key: 'cleanFiltered',
	    value: function cleanFiltered() {
	      var value = this.props.defaultValue ? this.props.defaultValue.number : '';
	      var comparator = this.props.defaultValue ? this.props.defaultValue.comparator : '';
	      this.setState({ isPlaceholderSelected: value === '' });
	      this.refs.numberFilterComparator.value = comparator;
	      this.refs.numberFilter.value = value;
	      this.props.filterHandler({ number: value, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
	    }
	  }, {
	    key: 'applyFilter',
	    value: function applyFilter(filterObj) {
	      var number = filterObj.number,
	          comparator = filterObj.comparator;

	      this.setState({ isPlaceholderSelected: number === '' });
	      this.refs.numberFilterComparator.value = comparator;
	      this.refs.numberFilter.value = number;
	      this.props.filterHandler({ number: number, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
	    }
	  }, {
	    key: 'getComparatorOptions',
	    value: function getComparatorOptions() {
	      var optionTags = [];
	      optionTags.push(_react2.default.createElement('option', { key: '-1' }));
	      for (var i = 0; i < this.numberComparators.length; i++) {
	        optionTags.push(_react2.default.createElement(
	          'option',
	          { key: i, value: this.numberComparators[i] },
	          this.numberComparators[i]
	        ));
	      }
	      return optionTags;
	    }
	  }, {
	    key: 'getNumberOptions',
	    value: function getNumberOptions() {
	      var optionTags = [];
	      var options = this.props.options;


	      optionTags.push(_react2.default.createElement(
	        'option',
	        { key: '-1', value: '' },
	        this.props.placeholder || 'Select ' + this.props.columnName + '...'
	      ));
	      for (var i = 0; i < options.length; i++) {
	        optionTags.push(_react2.default.createElement(
	          'option',
	          { key: i, value: options[i] },
	          options[i]
	        ));
	      }
	      return optionTags;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var comparator = this.refs.numberFilterComparator.value;
	      var number = this.refs.numberFilter.value;
	      if (comparator && number) {
	        this.props.filterHandler({ number: number, comparator: comparator }, _Const2.default.FILTER_TYPE.NUMBER);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var selectClass = (0, _classnames2.default)('select-filter', 'number-filter-input', 'form-control', { 'placeholder-selected': this.state.isPlaceholderSelected });

	      return _react2.default.createElement(
	        'div',
	        { className: 'filter number-filter' },
	        _react2.default.createElement(
	          'select',
	          { ref: 'numberFilterComparator',
	            className: 'number-filter-comparator form-control',
	            onChange: this.onChangeComparator,
	            defaultValue: this.props.defaultValue ? this.props.defaultValue.comparator : '' },
	          this.getComparatorOptions()
	        ),
	        this.props.options ? _react2.default.createElement(
	          'select',
	          { ref: 'numberFilter',
	            className: selectClass,
	            onChange: this.onChangeNumberSet,
	            defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' },
	          this.getNumberOptions()
	        ) : _react2.default.createElement('input', { ref: 'numberFilter',
	          type: 'number',
	          className: 'number-filter-input form-control',
	          placeholder: this.props.placeholder || 'Enter ' + this.props.columnName + '...',
	          onChange: this.onChangeNumber,
	          defaultValue: this.props.defaultValue ? this.props.defaultValue.number : '' })
	      );
	    }
	  }]);

	  return NumberFilter;
	}(_react.Component);

	NumberFilter.propTypes = {
	  filterHandler: _react.PropTypes.func.isRequired,
	  options: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  defaultValue: _react.PropTypes.shape({
	    number: _react.PropTypes.number,
	    comparator: _react.PropTypes.oneOf(legalComparators)
	  }),
	  delay: _react.PropTypes.number,
	  /* eslint consistent-return: 0 */
	  numberComparators: function numberComparators(props, propName) {
	    if (!props[propName]) {
	      return;
	    }
	    for (var i = 0; i < props[propName].length; i++) {
	      var comparatorIsValid = false;
	      for (var j = 0; j < legalComparators.length; j++) {
	        if (legalComparators[j] === props[propName][i]) {
	          comparatorIsValid = true;
	          break;
	        }
	      }
	      if (!comparatorIsValid) {
	        return new Error('Number comparator provided is not supported.\n          Use only ' + legalComparators);
	      }
	    }
	  },
	  placeholder: _react.PropTypes.string,
	  columnName: _react.PropTypes.string
	};

	NumberFilter.defaultProps = {
	  delay: _Const2.default.FILTER_DELAY
	};

	var _default = NumberFilter;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(legalComparators, 'legalComparators', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Number.js');

	  __REACT_HOT_LOADER__.register(NumberFilter, 'NumberFilter', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Number.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/filters/Number.js');
	}();

	;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonGroup = function (_Component) {
	  _inherits(ButtonGroup, _Component);

	  function ButtonGroup() {
	    _classCallCheck(this, ButtonGroup);

	    return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
	  }

	  _createClass(ButtonGroup, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          sizeClass = _props.sizeClass,
	          children = _props.children,
	          rest = _objectWithoutProperties(_props, ['className', 'sizeClass', 'children']);

	      return _react2.default.createElement(
	        'div',
	        _extends({ className: 'btn-group ' + sizeClass + ' ' + className, role: 'group' }, rest),
	        children
	      );
	    }
	  }]);

	  return ButtonGroup;
	}(_react.Component);

	ButtonGroup.propTypes = {
	  sizeClass: _react.PropTypes.string,
	  className: _react.PropTypes.string
	};
	ButtonGroup.defaultProps = {
	  sizeClass: 'btn-group-sm',
	  className: ''
	};

	var _default = ButtonGroup;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ButtonGroup, 'ButtonGroup', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ButtonGroup.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/garettarrowood/Power/react-bootstrap-table/src/toolbar/ButtonGroup.js');
	}();

	;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=react-bootstrap-table.js.map