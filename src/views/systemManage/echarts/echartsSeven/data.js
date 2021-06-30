// 七日报警统计
const averageTime = {
  xAxisData: ['1F1L1E1', '1F1L1E2', '1F1L1E3', '1F1L1E4', '1F1L1E5', '1F1L1E6', '1F1L1E7'],
  yAxisData: [3, 4, 3, 4, 3, 4, 3],
  yAxisData2: [4, 5, 8, 9, 4, 7, 8]
}

// 月底不良TCPS
const dys = {
  dysName: ['1F1L1E2#', '1F1L1E3#', '1F1L1E5#', '1F1L1E9#', '1F1L2E2#'],
  dysValue: [
    { value: 335, name: '1F1L1E2#' },
    { value: 310, name: '1F1L1E3#' },
    { value: 234, name: '1F1L1E5#' },
    { value: 135, name: '1F1L1E9#' },
    { value: 158, name: '1F1L2E2#' }
  ]
}
// 良率趋势
const tendencyChart = {
  rawData: [
    ['2015/1/5', '3258.63', '3350.52', '3253.88', '3369.28'],
    ['2015/1/6', '3330.8', '3351.45', '3303.18', '3394.22'],
    ['2015/1/7', '3326.65', '3373.95', '3312.21', '3374.9'],
    ['2015/1/8', '3371.96', '3293.46', '3285.09', '3381.57'],
    ['2015/1/9', '3276.97', '3285.41', '3267.51', '3404.83'],
    ['2015/1/12', '3258.21', '3229.32', '3191.58', '3275.19'],
    ['2015/1/13', '3223.54', '3235.3', '3214.41', '3259.39'],
    ['2015/1/14', '3242.34', '3222.44', '3193.98', '3268.48'],
    ['2015/1/15', '3224.07', '3336.46', '3207.54', '3337.08'],
    ['2015/1/16', '3343.6', '3376.5', '3340.49', '3400.32'],
    ['2015/1/19', '3189.73', '3116.35', '3095.07', '3262.21'],
    ['2015/1/20', '3114.56', '3173.05', '3100.48', '3190.25'],
    ['2015/1/21', '3189.08', '3323.61', '3178.34', '3337'],
    ['2015/1/22', '3327.32', '3343.34', '3293.98', '3352.38'],
    ['2015/1/23', '3357.1', '3351.76', '3328.29', '3406.79'],
    ['2015/1/26', '3347.26', '3383.18', '3321.31', '3384.8'],
    ['2015/1/27', '3389.85', '3352.96', '3290.22', '3390.22'],
    ['2015/1/28', '3325.72', '3305.74', '3294.66', '3354.8'],
    ['2015/1/29', '3259', '3262.3', '3234.24', '3286.79'],
    ['2015/1/30', '3273.75', '3210.36', '3210.31', '3288.5'],
    ['2015/2/2', '3148.14', '3128.3', '3122.57', '3175.13'],
    ['2015/2/3', '3156.09', '3204.91', '3129.73', '3207.94'],
    ['2015/2/4', '3212.82', '3174.13', '3171.14', '3238.98'],
    ['2015/2/5', '3251.21', '3136.53', '3135.82', '3251.21'],
    ['2015/2/6', '3120.09', '3075.91', '3052.94', '3129.54'],
    ['2015/2/9', '3063.51', '3095.12', '3049.11', '3119.03'],
    ['2015/2/10', '3090.49', '3141.59', '3084.25', '3142.1'],
    ['2015/2/11', '3145.76', '3157.7', '3139.05', '3166.42'],
    ['2015/2/12', '3157.96', '3173.42', '3134.24', '3181.77'],
    ['2015/2/13', '3186.81', '3203.83', '3182.79', '3237.16'],
    ['2015/2/16', '3206.14', '3222.36', '3195.88', '3228.85'],
    ['2015/2/17', '3230.88', '3246.91', '3230.77', '3255.73'],
    ['2015/2/25', '3256.48', '3228.84', '3215.55', '3257.22'],
    ['2015/2/26', '3222.15', '3298.36', '3202.19', '3300.62'],
    ['2015/2/27', '3296.83', '3310.3', '3291.01', '3324.55'],
    ['2015/3/2', '3332.72', '3336.28', '3298.67', '3336.76'],
    ['2015/3/3', '3317.7', '3263.05', '3260.43', '3317.7'],
    ['2015/3/4', '3264.18', '3279.53', '3250.48', '3286.59'],
    ['2015/3/5', '3264.08', '3248.48', '3221.67', '3266.64'],
    ['2015/3/6', '3248.04', '3241.19', '3234.53', '3266.93'],
    ['2015/3/9', '3224.31', '3302.41', '3198.37', '3307.7'],
    ['2015/3/10', '3289.08', '3286.07', '3277.09', '3309.92'],
    ['2015/3/11', '3289.59', '3290.9', '3278.47', '3325.05'],
    ['2015/3/12', '3314.81', '3349.32', '3300.49', '3360.05'],
    ['2015/3/13', '3359.49', '3372.91', '3352.15', '3391.25'],
    ['2015/3/16', '3391.16', '3449.3', '3377.09', '3449.3'],
    ['2015/3/17', '3469.6', '3502.85', '3459.69', '3504.12'],
    ['2015/3/18', '3510.5', '3577.3', '3503.85', '3577.66'],
    ['2015/3/19', '3576.02', '3582.27', '3546.84', '3600.68'],
    ['2015/3/20', '3587.08', '3617.32', '3569.38', '3632.34'],
    ['2015/3/23', '3640.1', '3687.73', '3635.49', '3688.25'],
    ['2015/3/24', '3692.57', '3691.41', '3600.7', '3715.87'],
    ['2015/3/25', '3680.95', '3660.73', '3634.56', '3693.15'],
    ['2015/3/26', '3641.94', '3682.09', '3615.01', '3707.32'],
    ['2015/3/27', '3686.13', '3691.1', '3656.83', '3710.48'],
    ['2015/3/30', '3710.61', '3786.57', '3710.61', '3795.94'],
    ['2015/3/31', '3822.99', '3747.9', '3737.04', '3835.57'],
    ['2015/4/1', '3748.34', '3810.29', '3742.21', '3817.08'],
    ['2015/4/2', '3827.69', '3825.78', '3775.89', '3835.45'],
    ['2015/4/3', '3803.38', '3863.93', '3792.21', '3864.41'],
    ['2015/4/7', '3899.42', '3961.38', '3891.73', '3961.67'],
    ['2015/4/8', '3976.53', '3994.81', '3903.65', '4000.22'],
    ['2015/4/9', '4006.13', '3957.53', '3900.03', '4016.4'],
    ['2015/4/10', '3947.49', '4034.31', '3929.32', '4040.35'],
    ['2015/4/13', '4072.72', '4121.71', '4057.29', '4128.07'],
    ['2015/4/14', '4125.78', '4135.56', '4091.26', '4168.35'],
    ['2015/4/15', '4135.65', '4084.16', '4069.01', '4175.49'],
    ['2015/4/16', '4055.92', '4194.82', '4031.24', '4195.31'],
    ['2015/4/17', '4254.72', '4287.3', '4238.91', '4317.22'],
    ['2015/4/20', '4301.35', '4217.08', '4190.68', '4356'],
    ['2015/4/21', '4212.19', '4293.62', '4188.57', '4294.38'],
    ['2015/4/22', '4304.6', '4398.49', '4297.95', '4400.19'],
    ['2015/4/23', '4414.48', '4414.51', '4358.84', '4444.41'],
    ['2015/4/24', '4355.95', '4393.69', '4318.12', '4416.38'],
    ['2015/4/27', '4441.93', '4527.4', '4441.93', '4529.73'],
    ['2015/4/28', '4527.63', '4476.21', '4432.9', '4572.39'],
    ['2015/4/29', '4446.12', '4476.62', '4398.64', '4499.94'],
    ['2015/4/30', '4483.01', '4441.65', '4441.05', '4507.34'],
    ['2015/5/4', '4441.34', '4480.46', '4387.43', '4487.57'],
    ['2015/5/5', '4479.85', '4298.71', '4282.24', '4488.87'],
    ['2015/5/6', '4311.64', '4229.27', '4187.37', '4376.35'],
    ['2015/5/7', '4197.9', '4112.21', '4108.01', '4213.76'],
    ['2015/5/8', '4152.98', '4205.92', '4099.04', '4206.86'],
    ['2015/5/11', '4231.27', '4333.58', '4187.82', '4334.88'],
    ['2015/5/12', '4342.37', '4401.22', '4317.98', '4402.31'],
    ['2015/5/13', '4402.38', '4375.76', '4342.48', '4415.63'],
    ['2015/5/14', '4372.82', '4378.31', '4329.04', '4397.75'],
    ['2015/5/15', '4366.82', '4308.69', '4278.55', '4366.82'],
    ['2015/5/18', '4277.9', '4283.49', '4260.51', '4324.83'],
    ['2015/5/19', '4285.78', '4417.55', '4285.78', '4418.4'],
    ['2015/5/20', '4434.98', '4446.29', '4432.28', '4520.54'],
    ['2015/5/21', '4456.44', '4529.42', '4438.26', '4530.48'],
    ['2015/5/22', '4584.98', '4657.6', '4562.99', '4658.27'],
    ['2015/5/25', '4660.08', '4813.8', '4656.83', '4814.67'],
    ['2015/5/26', '4854.85', '4910.9', '4779.08', '4911.69'],
    ['2015/5/27', '4932.85', '4941.71', '4857.06', '4958.16'],
    ['2015/5/28', '4943.74', '4620.27', '4614.24', '4986.5'],
    ['2015/5/29', '4603.47', '4611.74', '4431.56', '4698.19'],
    ['2015/6/1', '4633.1', '4828.74', '4615.23', '4829.5'],
    ['2015/6/2', '4844.7', '4910.53', '4797.55', '4911.57'],
    ['2015/6/3', '4924.38', '4909.98', '4822.44', '4942.06'],
    ['2015/6/4', '4912.95', '4947.1', '4647.41', '4947.96'],
    ['2015/6/5', '5016.09', '5023.1', '4898.07', '5051.63'],
    ['2015/6/8', '5045.69', '5131.88', '4997.48', '5146.95'],
    ['2015/6/9', '5145.98', '5113.53', '5042.96', '5147.45'],
    ['2015/6/10', '5049.2', '5106.04', '5001.49', '5164.16'],
    ['2015/6/11', '5101.44', '5121.59', '5050.76', '5122.46'],
    ['2015/6/12', '5143.34', '5166.35', '5103.4', '5178.19'],
    ['2015/6/15', '5174.42', '5062.99', '5048.74', '5176.79'],
    ['2015/6/16', '5004.41', '4887.43', '4842.1', '5029.68'],
    ['2015/6/17', '4890.55', '4967.9', '4767.22', '4983.66'],
    ['2015/6/18', '4942.52', '4785.36', '4780.87', '4966.77'],
    ['2015/6/19', '4689.93', '4478.36', '4476.5', '4744.08'],
    ['2015/6/23', '4471.61', '4576.49', '4264.77', '4577.94'],
    ['2015/6/24', '4604.58', '4690.15', '4552.13', '4691.77'],
    ['2015/6/25', '4711.76', '4527.78', '4483.55', '4720.7'],
    ['2015/6/26', '4399.93', '4192.87', '4139.53', '4456.9'],
    ['2015/6/29', '4289.77', '4053.03', '3875.05', '4297.47'],
    ['2015/6/30', '4006.75', '4277.22', '3847.88', '4279.97'],
    ['2015/7/1', '4214.15', '4053.7', '4043.37', '4317.05'],
    ['2015/7/2', '4058.62', '3912.77', '3795.25', '4080.39'],
    ['2015/7/3', '3793.71', '3686.92', '3629.56', '3927.13'],
    ['2015/7/6', '3975.21', '3775.91', '3653.04', '3975.21'],
    ['2015/7/7', '3654.78', '3727.12', '3585.4', '3750.57'],
    ['2015/7/8', '3467.4', '3507.19', '3421.53', '3599.25'],
    ['2015/7/9', '3432.45', '3709.33', '3373.54', '3748.48'],
    ['2015/7/10', '3707.46', '3877.8', '3677.43', '3959.22'],
    ['2015/7/13', '3918.99', '3970.39', '3858.64', '4030.19'],
    ['2015/7/14', '3958.37', '3924.49', '3855.56', '4035.43'],
    ['2015/7/15', '3874.97', '3805.7', '3741.25', '3914.27'],
    ['2015/7/16', '3758.5', '3823.18', '3688.44', '3877.51'],
    ['2015/7/17', '3831.42', '3957.35', '3814.15', '3994.48'],
    ['2015/7/20', '3948.42', '3992.11', '3927.12', '4021.33'],
    ['2015/7/21', '3939.9', '4017.67', '3912.8', '4041.82'],
    ['2015/7/22', '3996.43', '4026.04', '3960.86', '4042.34'],
    ['2015/7/23', '4022.27', '4123.92', '4019.04', '4132.61'],
    ['2015/7/24', '4124.75', '4070.91', '4044.83', '4184.45'],
    ['2015/7/27', '3985.57', '3725.56', '3720.44', '4051.16'],
    ['2015/7/28', '3573.14', '3663', '3537.36', '3762.53'],
    ['2015/7/29', '3689.82', '3789.17', '3612.06', '3792.07'],
    ['2015/7/30', '3773.79', '3705.77', '3685.96', '3844.37'],
    ['2015/7/31', '3655.67', '3663.73', '3620.17', '3729.51'],
    ['2015/8/3', '3614.99', '3622.91', '3549.5', '3648.94'],
    ['2015/8/4', '3621.85', '3756.54', '3601.29', '3757.03'],
    ['2015/8/5', '3745.65', '3694.57', '3676.39', '3782.35'],
    ['2015/8/6', '3625.5', '3661.54', '3614.74', '3710.57'],
    ['2015/8/7', '3692.61', '3744.2', '3686.3', '3756.74'],
    ['2015/8/10', '3786.03', '3928.42', '3775.85', '3943.62'],
    ['2015/8/11', '3928.81', '3927.91', '3891.18', '3970.34'],
    ['2015/8/12', '3881.23', '3886.32', '3871.14', '3937.77'],
    ['2015/8/13', '3869.91', '3954.56', '3838.16', '3955.79'],
    ['2015/8/14', '3976.41', '3965.33', '3939.83', '4000.68'],
    ['2015/8/17', '3947.84', '3993.67', '3907.4', '3994.54'],
    ['2015/8/18', '3999.13', '3748.16', '3743.39', '4006.34'],
    ['2015/8/19', '3646.8', '3794.11', '3558.38', '3811.43'],
    ['2015/8/20', '3754.57', '3664.29', '3663.61', '3788.01'],
    ['2015/8/21', '3609.96', '3507.74', '3490.54', '3652.84'],
    ['2015/8/24', '3373.48', '3209.91', '3191.88', '3388.36'],
    ['2015/8/25', '3004.13', '2964.97', '2947.94', '3123.03'],
    ['2015/8/26', '2980.79', '2927.29', '2850.71', '3092.04'],
    ['2015/8/27', '2978.03', '3083.59', '2906.49', '3085.42'],
    ['2015/8/28', '3125.26', '3232.35', '3102.95', '3235.84'],
    ['2015/8/31', '3203.56', '3205.99', '3109.16', '3207.86'],
    ['2015/9/1', '3157.83', '3166.62', '3053.74', '3180.33'],
    ['2015/9/2', '3027.68', '3160.17', '3019.09', '3194.48'],
    ['2015/9/7', '3149.38', '3080.42', '3066.3', '3217.58'],
    ['2015/9/8', '3054.44', '3170.45', '3011.12', '3174.71'],
    ['2015/9/9', '3182.55', '3243.09', '3165.7', '3256.74'],
    ['2015/9/10', '3190.55', '3197.89', '3178.9', '3243.28'],
    ['2015/9/11', '3189.48', '3200.23', '3163.45', '3223.76'],
    ['2015/9/14', '3221.17', '3114.8', '3049.23', '3229.48'],
    ['2015/9/15', '3043.8', '3005.17', '2983.92', '3081.7'],
    ['2015/9/16', '2998.04', '3152.26', '2983.54', '3182.93'],
    ['2015/9/17', '3131.98', '3086.06', '3085.31', '3204.7'],
    ['2015/9/18', '3100.28', '3097.92', '3070.34', '3122.05'],
    ['2015/9/21', '3072.09', '3156.54', '3060.86', '3159.88'],
    ['2015/9/22', '3161.32', '3185.62', '3152.48', '3213.48'],
    ['2015/9/23', '3137.72', '3115.89', '3104.74', '3164.04'],
    ['2015/9/24', '3126.49', '3142.69', '3109.69', '3151.16'],
    ['2015/9/25', '3130.85', '3092.35', '3063', '3149.95'],
    ['2015/9/28', '3085.57', '3100.76', '3042.31', '3103.07'],
    ['2015/9/29', '3055.22', '3038.14', '3021.16', '3068.3'],
    ['2015/9/30', '3052.84', '3052.78', '3039.74', '3073.3'],
    ['2015/10/8', '3156.07', '3143.36', '3133.13', '3172.28'],
    ['2015/10/9', '3146.64', '3183.15', '3137.79', '3192.72'],
    ['2015/10/12', '3193.54', '3287.66', '3188.41', '3318.71'],
    ['2015/10/13', '3262.16', '3293.23', '3253.25', '3298.63'],
    ['2015/10/14', '3280.02', '3262.44', '3256.25', '3307.32'],
    ['2015/10/15', '3255.03', '3338.07', '3254.39', '3338.3'],
    ['2015/10/16', '3358.3', '3391.35', '3334.85', '3393.02'],
    ['2015/10/19', '3401.63', '3386.7', '3355.57', '3423.4'],
    ['2015/10/20', '3377.55', '3425.33', '3357.86', '3425.52'],
    ['2015/10/21', '3428.56', '3320.68', '3265.44', '3447.26'],
    ['2015/10/22', '3292.29', '3368.74', '3282.99', '3373.78'],
    ['2015/10/23', '3377.55', '3412.43', '3360.22', '3422.02'],
    ['2015/10/26', '3448.65', '3429.58', '3402', '3457.52'],
    ['2015/10/27', '3409.14', '3434.34', '3332.62', '3441.57'],
    ['2015/10/28', '3417.01', '3375.2', '3367.23', '3439.76'],
    ['2015/10/29', '3387.77', '3387.32', '3362.51', '3411.71'],
    ['2015/10/30', '3380.28', '3382.56', '3346.59', '3417.2'],
    ['2015/11/2', '3337.58', '3325.08', '3322.31', '3391.06'],
    ['2015/11/3', '3330.32', '3316.7', '3302.18', '3346.27'],
    ['2015/11/4', '3325.62', '3459.64', '3325.62', '3459.65'],
    ['2015/11/5', '3459.22', '3522.82', '3455.53', '3585.66'],
    ['2015/11/6', '3514.44', '3590.03', '3508.83', '3596.38'],
    ['2015/11/9', '3588.5', '3646.88', '3588.5', '3673.76'],
    ['2015/11/10', '3617.4', '3640.49', '3607.89', '3669.53'],
    ['2015/11/11', '3635', '3650.25', '3605.62', '3654.88'],
    ['2015/11/12', '3656.82', '3632.9', '3603.23', '3659.31'],
    ['2015/11/13', '3600.76', '3580.84', '3564.81', '3632.56'],
    ['2015/11/16', '3522.46', '3606.96', '3519.42', '3607.61'],
    ['2015/11/17', '3629.98', '3604.8', '3598.07', '3678.27'],
    ['2015/11/18', '3605.06', '3568.47', '3558.7', '3617.07'],
    ['2015/11/19', '3573.78', '3617.06', '3561.04', '3618.21'],
    ['2015/11/20', '3620.79', '3630.5', '3607.92', '3640.53'],
    ['2015/11/23', '3630.87', '3610.31', '3598.87', '3654.75'],
    ['2015/11/24', '3602.89', '3616.11', '3563.1', '3616.48'],
    ['2015/11/25', '3614.07', '3647.93', '3607.52', '3648.37'],
    ['2015/11/26', '3659.57', '3635.55', '3629.86', '3668.38'],
    ['2015/11/27', '3616.54', '3436.3', '3412.43', '3621.9'],
    ['2015/11/30', '3433.85', '3445.4', '3327.81', '3470.37'],
    ['2015/12/1', '3442.44', '3456.31', '3417.54', '3483.41'],
    ['2015/12/2', '3450.28', '3536.91', '3427.66', '3538.85'],
    ['2015/12/3', '3525.73', '3584.82', '3517.23', '3591.73'],
    ['2015/12/4', '3558.15', '3524.99', '3510.41', '3568.97'],
    ['2015/12/7', '3529.81', '3536.93', '3506.62', '3543.95'],
    ['2015/12/8', '3518.65', '3470.07', '3466.79', '3518.65'],
    ['2015/12/9', '3462.58', '3472.44', '3454.88', '3495.7'],
    ['2015/12/10', '3469.81', '3455.5', '3446.27', '3503.65'],
    ['2015/12/11', '3441.6', '3434.58', '3410.92', '3455.55'],
    ['2015/12/14', '3403.51', '3520.67', '3399.28', '3521.78'],
    ['2015/12/15', '3518.13', '3510.35', '3496.85', '3529.96'],
    ['2015/12/16', '3522.09', '3516.19', '3506.29', '3538.69'],
    ['2015/12/17', '3533.63', '3580', '3533.63', '3583.41'],
    ['2015/12/18', '3574.94', '3578.96', '3568.16', '3614.7'],
    ['2015/12/21', '3568.58', '3642.47', '3565.75', '3651.06'],
    ['2015/12/22', '3645.99', '3651.77', '3616.87', '3652.63'],
    ['2015/12/23', '3653.28', '3636.09', '3633.03', '3684.57'],
    ['2015/12/24', '3631.31', '3612.49', '3572.28', '3640.22'],
    ['2015/12/25', '3614.05', '3627.91', '3601.74', '3635.26'],
    ['2015/12/28', '3635.77', '3533.78', '3533.78', '3641.59'],
    ['2015/12/29', '3528.4', '3563.74', '3515.52', '3564.17'],
    ['2015/12/30', '3566.73', '3572.88', '3538.11', '3573.68'],
    ['2015/12/31', '3570.47', '3539.18', '3538.35', '3580.6']
  ]
}

// 设备运行统计图
const operationChart = {
  xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  yAxisData: [
    [3, 1, 3, 1, 2, 2, 1],
    [2, 3, 1, 3, 1, 2, 3],
    [2, 2, 1, 1, 1, 1, 2],
    [3, 2, 1, 1, 2, 1, 3],
    [14, 16, 18, 15, 18, 18, 15]
  ]
}

//  子站运行指示
const evaluateChart = {
  data: [{
    'name': ' 子站运行指示',
    'type': 'radar',
    'symbol': 'none',
    'lineStyle': {
      'width': 1
    },
    'emphasis': {
      'areaStyle': {
        'color': 'rgba(0,250,0,0.3)'
      }
    },
    'data': [{
      'value': [380, 204, 120, 118, 140, 120],
      'name': '2002'
    }]
  }]
}

const healthDegree = {
  healthValue: 83.2, // 健康
  upkeepValue: 90, // 保养
  maintainValue: 70, // 维修
  sparePartValue: 90, // 备件
  breakdownVaule: 80, // 故障
  spotVaule: 86 // 点检

}

const spcDataLeft = {
  xAxisData: ['21:25:12', '21:35:12', '21:36:12', '21:38:124', '21:39:12', '21:45:12', '21:56:12', '22:15:12', '22:25:12', '22:35:12', '22:45:12', '22:55:12', '22:56:12', '22:59:12', '23:12:12', '23:13:12', '23:15:12', '23:19:12', '23:44:12', '23:45:12', '23:46:12', '23:48:12', '23:53:12'],
  yAxisData: [13, 4, 3, 4, 23, 4, 23, 6, 2, 4, 2, 4, 43, 4, 13, 44, 3, 34, 3, 6, 2, 24, 2, 4],
  CPK: '0.19',
  CP: '0.36',
  CA: '0.46',
  AVG: '34.65',
  Range: '30.67',
  LT: '20',
  Yield: '70',
  max: 50,
  min: -10

}
// 温度汇总
const spcDataRight = {
  xAxisData: ['21:25:12', '21:35:12', '21:36:12', '21:38:124', '21:39:12', '21:45:12', '21:56:12', '22:15:12', '22:25:12', '22:35:12', '22:45:12', '22:55:12', '22:56:12', '22:59:12', '23:12:12', '23:13:12', '23:15:12', '23:19:12', '23:44:12', '23:45:12', '23:46:12', '23:48:12', '23:53:12'],
  yAxisData: [7, 14, 23, 4, 3, 34, 13, 6, 22, 34, 2, 4, 13, 4, 13, 24, 3, 14, 3, 16, 21, 14, 12, 34],
  CPK: '0.16',
  CP: '0.36',
  CA: '0.56',
  AVG: '32.65',
  Range: '30.67',
  LT: '30',
  Yield: '80',
  max: 50,
  min: -10

}

export default {
  averageTime,
  dys,
  tendencyChart,
  operationChart,
  evaluateChart,
  healthDegree,
  spcDataLeft,
  spcDataRight
}
