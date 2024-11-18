export class HPWeightLossWeek8Item{
    public Name:any;
    public DOB:any;
    public Medicine:any;
    public Allergy:any;
    public SideEffects: any;
    public HeightFt:any;
    public HeightInch:any;    
    public SBp:any;
    public DBp:any;
    public Pulse:any;    
    public StartingBMI: any;
    public TodayBMI: any;

    public HigherDose: any;   // Does the patient want to a higher dose?
    public OnProgramPeriod: any;
    public WeightLoss: any;
    public WeightLossPercentage: any;
    public WeightLossPerMonth: any;

    public StartWeightDate: any;
    public WeightDate1: any;
    public WeightDate2: any;
    public StartWeight: number;
    public Weight1: number;  // 1st month
    public Weight2: number;  // 2nd month

    public IsEffect: any; // For treatment effect: weight loss
    public DoseOfSemaglutideInSummary: any;
    public IsApproved: any;
    public RXApproved: any;    
    public PhysicianName:any;    
    
    public Semaglutide:any;
    public DoseOfSemaglutide: any;  // current dose
    public RxNewDoseOfSemaglutide: any; // After visit, new dose
    public RxNewMaintainDoseOfSemaglutide: any;

    public Tirzepatide:any;
    public RxNewDoseOfTirzepatide: any;
    public RxNewMaintainDoseOfTirzepatide: any;
    // public ReviewedWithPatient:any;
    // public RefillQty:any;
    // public Troche: any;
    // public LipoVS:any;
    // public Sublingual:any;    
    public AdditionalNotes:any;
    public OtherMedicineDosage:any;
  }