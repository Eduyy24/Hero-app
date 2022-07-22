import puppeteer from 'puppeteer'
import path from 'path';


jest.setTimeout(30000);


const btnVenderPath = "//*[text()='Vender']";
const btnContinuePath = "//*[text()='Continuar']"
const iptNamePath = "//*[@name='name']";
const iptEmailPath = "//*[@name='email']";
const iptAdressPath = "//*[@name='adress']";
const iptFlatPath = "//*[@name='flat']";
const chkBBQPath = "//*[@name='bbq-area']";
const chkComunalPath = "//*[@name='communal-living']";
const chkPlaygroundPath = "//*[@name='playground']";
const slcParkingPath = "//*[@name='parking']";
const slcCoveredPath = "//*[@name='covered']";
const inpAmountPath = "//*[@name='amount']";
const inpFilePath = "//*[@name='image']";
const slcElevatorPath = "//*[@name='elevator']";
const btnFinalizarPath = "//*[text()='Finalizar']"



describe('General test end to end', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  })

  afterEach(async () => {
    await browser.close();
  })

  test('Send sell form complete correctly', async () => {
    const page = await browser.newPage();

    page.on('dialog', async dialog => {
      console.log('here');
      await dialog.accept();
    });

    await page.goto('http://localhost:3000/');

    await page.waitForTimeout(4000);

    const btnVender = (await page.$x(btnVenderPath))[0]

    await page.screenshot({path: 'src/e2e/evidences/home.png'});
    await btnVender.click()

    //step-1
    const inpName = (await page.$x(iptNamePath))[0]
    await inpName.type('Eduardo')

    await page.screenshot({path: 'src/e2e/evidences/step-1.png'});
    const btnContinue = (await page.$x(btnContinuePath))[0]
    await btnContinue.click()

    //step-2
    const inpEmail = (await page.$x(iptEmailPath))[0]
    await inpEmail.type('Eduardo@mail.com')

    await page.screenshot({path: 'src/e2e/evidences/step-2.png'});
    await btnContinue.click()

    //step-3
    const inpAdress = (await page.$x(iptAdressPath))[0]
    await inpAdress.type('Calle 11 #14 - 54')

    await page.screenshot({path: 'src/e2e/evidences/step-3.png'});
    await btnContinue.click()

    //step-4
    const inpFlat = (await page.$x(iptFlatPath))[0]
    await inpFlat.type('30')

    await page.screenshot({path: 'src/e2e/evidences/step-4.png'});
    await btnContinue.click()

    //step-5
    const chkBBQ = (await page.$x(chkBBQPath))[0]
    const chkComunal = (await page.$x(chkComunalPath))[0]
    const chkPlay = (await page.$x(chkPlaygroundPath))[0]

    await chkBBQ.click()
    await chkComunal.click()
    await chkPlay.click()

    await page.screenshot({path: 'src/e2e/evidences/step-5.png'});
    await btnContinue.click()

    //step-6
    const slcParking = (await page.$x(slcParkingPath))[0]
    const slcCovered = (await page.$x(slcCoveredPath))[0]

    await slcParking.select('SI')
    await slcCovered.select('NO')

    await page.screenshot({path: 'src/e2e/evidences/step-6.png'});
    await btnContinue.click()

    //step-7
    const inpAmount = (await page.$x(inpAmountPath))[0]

    await inpAmount.type('10000');

    await page.screenshot({path: 'src/e2e/evidences/step-7.png'});
    await btnContinue.click()

    //step-8
    const filePath = path.relative(process.cwd(), __dirname + '/assets/coca.jpg');
    const inpFile = (await page.$x(inpFilePath))[0]
    await inpFile.uploadFile(filePath);

    await page.screenshot({path: 'src/e2e/evidences/step-8.png'});
    await btnContinue.click()

    //step-9
    const slcElevator = (await page.$x(slcElevatorPath))[0]

    await slcElevator.select('SI')

    await page.screenshot({path: 'src/e2e/evidences/step-9.png'});
    await btnContinue.click()

    // resume
    await page.screenshot({path: 'src/e2e/evidences/resume.png'});
    const btnFinalize = (await page.$x(btnFinalizarPath))[0]
    await btnFinalize.click()
  })

})