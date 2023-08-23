import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices'; 

const KeyFeatures = () => {
	return (
		<Box id="about" sx={{ flexGrow: 1 }}>
			<Grid
				container
				padding="10px 50px"
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				sx={{ backgroundColor: "#2D2D2D" }}

			>
				<Grid
					item
					xs={9}
					sm={9}
					md={9}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography variant="h2" align="left" color="white">
						Evolve your wallet efficiency with InnovPay competitive exchange rates and Interest API
					</Typography>

					<Typography variant="subtitle1" align="left" paragraph color="white">
						InnovPay revolutionizes finance, uniting interest generation and
						currency exchange within a fortified multi-currency digital wallet,
						expanding your financial horizons.
					</Typography>

				</Grid>
				<Box width="100%" />
				<Grid
					item
					xs={4}
				>
					<Button variant="contained">Contained</Button>
				</Grid>

			</Grid>

			<Grid
				container
				padding="10px 50px"
				columns={10}
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				sx={{ backgroundColor: "#2D2D2D", justifyContent: "center" }}
				alignItems="flex-start"

			>

				<Grid
					item
					xs={2}
					alignItems="center"
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					}}

				>
					<CurrencyExchangeIcon sx={{ fontSize: 100, color: "yellow" }}/>
					<Typography variant="subtitle1"  paragraph color="white">
					 Competitive Exchange Rates (42 Currencies) 
					</Typography>
					<Typography variant="body1"  paragraph color="pink">
					Access 42 rates for global transactions, maximizing the value of your currencies.
					 </Typography>


				</Grid>
				<Grid
					item
					alignItems="center"
					xs={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					}}

				>
					<AccountBalanceWalletIcon  sx={{ fontSize: 100 , color: "yellow"}}/>
					<Typography variant="subtitle1"  paragraph color="white">
					Secure Multi-Currency Wallet 
					</Typography>
					<Typography variant="body1"  paragraph color="pink">
					Rest easy with InnovPay's state-of-the-art secure MultiCurrency Wallet, protecting your assets and transactions with advanced encryption and robust security measures.
					 </Typography>
				</Grid>
				<Grid
					item
					alignItems="center"
					xs={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					}}

				>
					<SavingsIcon sx={{ fontSize: 100 }}/>
					<Typography variant="subtitle1"  paragraph color="white">
					Earn 3.28% Interest T&C applies*  
					</Typography>
					<Typography variant="body1"  paragraph color="pink">
					Elevate your financial possibilities through a remarkable 3.28% interest rate, ushering in new avenues of prosperity.
					 </Typography>
				</Grid>
				<Grid
					item
					alignItems="center"
					xs={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					}}

				>
					<SpeedIcon sx={{ fontSize: 100 }}/>
					<Typography variant="subtitle1"  paragraph color="white">
					Instant Cross-Border Remittances 
					</Typography>
					<Typography variant="body1"  paragraph color="pink">
					Seamlessly send and receive money across the globe with lightning-fast remittances, simplifying international transactions.
					 </Typography>
				</Grid>
				<Grid
					item
					alignItems="center"
					xs={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center"
					}}

				>
					<DevicesIcon sx={{ fontSize: 100 }}/>
					<Typography variant="subtitle1"  paragraph color="white">
					AI-Driven Financial Insights
					</Typography>
					<Typography variant="body1"  paragraph color="pink">
					Harness personalized AI insights, gaining valuable perspectives that guide your financial decisions for optimal growth.
					 </Typography>
				</Grid>


			</Grid>


		</Box>
	);
};

export default KeyFeatures;
