import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { DataGrid } from '@material-ui/data-grid';
import ReplayIcon from '@material-ui/icons/Replay';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import FilterListIcon from '@material-ui/icons/FilterList';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import DescriptionIcon from '@material-ui/icons/Description';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#fff'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        backgroundColor: '#01A89E'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#F8F9FE'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#F8F9FE',
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: 100,
    },
    AccountName: {
        fontSize: 12,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    button: {
        marginLeft: 20,
        textTransform: 'capitalize'
    },
    buttonBuat: {
        "&:hover": {
            backgroundColor: '#007b74'
        },
        marginLeft: 20,
        textTransform: 'capitalize',
        backgroundColor: '#01A89E'
    },
    buttonKembali: {
        color: '#01A89E',
    },
    buttonBaca: {
        "&:hover": {
            backgroundColor: '#007b74'
        },
        marginLeft: 48,
        backgroundColor: '#01A89E',
    },
    divider: {
        height: 28,
    },
    input: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    paper: {
        width: 330,
        marginBottom: 10,
        display: 'flex',
        marginTop: 10
    },
    iconButton: {
        // marginLeft: 20
    },
    optionBaris: {
        fontSize: 12,
        marginLeft: 20,
        padding: 0
    },
    title2: {
        marginTop: 16,
        fontWeight: 'bold',
        fontSize: 12
    },
    badgeIcon: {
        color: '#01A89E '
    },
    selectBaris: {
     marginLeft: 250
    },
    logo: {
        marginRight: 20,
        color: '#01A89E'
    }
}));

const bariss = [
    { value: '1', label: '1 baris' },
    { value: '2', label: '2 baris' },
    { value: '3', label: '3 baris' },
    { value: '4', label: '4 baris' },
    { value: '5', label: '5 baris' },
    { value: '6', label: '6 baris' },
];

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [baris, setBaris] = React.useState('1');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'tglPengajuan', headerName: 'Tanggal Pengajuan', width: 200 },
        { field: 'noPengajuan', headerName: 'Nomor Pengajuan', width: 170 },
        { field: 'sumberDana', headerName: 'Sumber Dana', width: 150 },
        { field: 'tipeRealisasi', headerName: 'Tipe Realisasi', width: 150 },
        { field: 'penerimaan', headerName: 'Penerimaan', width: 150 },
        { field: 'totalPengajuan', headerName: 'Total Pengajuan', width: 170 },
    ];

    const rows = [
        { id: 1, tglPengajuan: '15 Januari 2020', noPengajuan: 'PG/1101/2018/20', sumberDana: 'Anggaran', tipeRealisasi: 'Tidak Langsung', penerimaan: '-', totalPengajuan: '2.600.000' },
        { id: 1, tglPengajuan: '15 Januari 2020', noPengajuan: 'PG/1101/2018/20', sumberDana: 'Anggaran', tipeRealisasi: 'Tidak Langsung', penerimaan: '-', totalPengajuan: '2.600.000' },
        { id: 1, tglPengajuan: '15 Januari 2020', noPengajuan: 'PG/1101/2018/20', sumberDana: 'Anggaran', tipeRealisasi: 'Tidak Langsung', penerimaan: '-', totalPengajuan: '2.600.000' },
        { id: 1, tglPengajuan: '15 Januari 2020', noPengajuan: 'PG/1101/2018/20', sumberDana: 'Anggaran', tipeRealisasi: 'Tidak Langsung', penerimaan: '-', totalPengajuan: '2.600.000' },
        { id: 1, tglPengajuan: '15 Januari 2020', noPengajuan: 'PG/1101/2018/20', sumberDana: 'Anggaran', tipeRealisasi: 'Tidak Langsung', penerimaan: '-', totalPengajuan: '2.600.000' },
        { id: 1, tglPengajuan: '15 Januari 2020', noPengajuan: 'PG/1101/2018/20', sumberDana: 'Anggaran', tipeRealisasi: 'Tidak Langsung', penerimaan: '-', totalPengajuan: '2.600.000' },
        { id: 1, tglPengajuan: '15 Januari 2020', noPengajuan: 'PG/1101/2018/20', sumberDana: 'Anggaran', tipeRealisasi: 'Tidak Langsung', penerimaan: '-', totalPengajuan: '2.600.000' },
        { id: 1, tglPengajuan: '15 Januari 2020', noPengajuan: 'PG/1101/2018/20', sumberDana: 'Anggaran', tipeRealisasi: 'Tidak Langsung', penerimaan: '-', totalPengajuan: '2.600.000' },

    ];

    const handleChange = (event) => {
        setBaris(event.target.value);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Paper component="form" className={classes.paper}>
                        <IconButton className={classes.iconButton} aria-label="search">
                            <DescriptionIcon />
                        </IconButton>
                        <span className={classes.title2}>User Guide - SIM Keuangan</span>
                        <Divider orientation="vertical" />
                        <Button variant='outlined' className={classes.buttonBaca}> Baca </Button>
                    </Paper>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary" className={classes.badgeIcon}>
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            className={classes.badgeIcon}>
                            <AccountCircle />
                            <Typography className={classes.AccountName}>Agra Sabian</Typography>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <h2 className={classes.logo}>Logo Here</h2>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Dashboard', 'Anggaran', 'Transaksi', 'Akuntansi', 'Referensi', 'Laporan', 'Pengaturan'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.root}>
                    <div className={classes.grow}>
                        <Typography>Transaksi - Pengajuan Dana</Typography>
                        <h1><ReplayIcon />Pengajuan Dana </h1>
                    </div>
                    <div>
                        <Button
                            className={classes.buttonKembali}
                            startIcon={<ArrowBackIcon />}
                        >
                            Kembali
                        </Button>
                        {/* <Divider className={classes.divider} orientation="vertical" /> */}
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.buttonBuat}
                            startIcon={<CreateIcon />}
                        >
                            Buat Pengajuan Dana
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                        >
                            Hapus
                        </Button>
                    </div>
                </div>
                <div className={classes.root}>
                    <div>
                        <Paper component="form" className={classes.paper}>
                            <InputBase
                                className={classes.input}
                                placeholder="Cari Tanggal atau Nomor Pengajuan"
                            />
                            <IconButton className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <Button
                            className={classes.buttonKembali}
                            startIcon={<FilterListIcon />}
                        >
                            Tampilkan Filter
                    </Button>
                    <div className={classes.selectBaris}>
                        Data per Halaman
                        <TextField
                            id="outlined-select-currency"
                            select
                            className={classes.optionBaris}
                            value={baris}
                            onChange={handleChange}
                            variant="outlined"
                            fontSize="12"
                        >
                            {bariss.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                </div>
            </main>
        </div>
    );
}
